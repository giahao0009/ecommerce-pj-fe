import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LeftMenu from "../../components/left-menu";
import Header from "../../components/header";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { loginSuccess } from "../../redux/authSlice";
import { logoutUser } from "../../redux/apiRequest";

import {
  MainLayout,
  LeftLayout,
  RightLayout,
  HeaderContainer,
  RightContainer,
} from "./styled";

function DashboardLayout() {
  const user = useSelector((state) => state.auth.login?.currentUser);
  const role = useSelector((state) => state.auth.login?.userInfo?.user?.role);
  const accessToken = user?.accessToken;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  let axiosJWT = axios.create();
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  });

  useEffect(() => {
    if (role == 1 || role == 2) {
      return;
    } else {
      navigate("/");
    }
  });

  const refreshToken = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_ENDPOINT}/user/refresh`,
        {
          withCredentials: true,
        }
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  axiosJWT.interceptors.request.use(
    async (config) => {
      let date = new Date();
      const decodedToken = jwt_decode(user?.accessToken);
      if (decodedToken.exp < date.getTime() / 1000) {
        const data = await refreshToken();
        const refreshUser = {
          ...user,
          accessToken: data.accessToken,
        };
        dispatch(loginSuccess(refreshUser));
        config.headers["x-auth-token"] = data.accessToken;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  const logoutAction = () => {
    logoutUser(dispatch, navigate, accessToken);
  };

  return (
    <MainLayout>
      <LeftLayout>
        <LeftMenu logoutAction={logoutAction} />
      </LeftLayout>
      <RightLayout>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <RightContainer>
          <Outlet />
        </RightContainer>
      </RightLayout>
    </MainLayout>
  );
}

export default DashboardLayout;
