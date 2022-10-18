import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";
import LeftMenu from "../../components/left-menu";
import Header from "../../components/header";
import useUserTokenExist from "../../hooks/useUserTokenExist";

import {
  MainLayout,
  LeftLayout,
  RightLayout,
  HeaderContainer,
  RightContainer,
} from "./styled";

function DashboardLayout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((s) => s.user);

  useEffect(() => {
    if (!user?.token) navigate("/login");
  }, [user?.token]);

  const logoutAction = () => {
    dispatch(logout());
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
