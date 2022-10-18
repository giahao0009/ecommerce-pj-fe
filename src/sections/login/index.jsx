import React, { useState, useEffect } from "react";
import Img from "../../assets/image/img_login_background.png";
import LoginForm from "../../components/loginForm";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { login } from "../../redux/userSlice";
import { toastSuccess, toastError } from "../../redux/toastSlice";

import {
  LoginLayoutContainer,
  LeftLayoutLogin,
  RightLayoutLogin,
  ImgLoginBackground,
} from "./styled";

function LoginSection() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((s) => s.user);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user?.token) navigate("/admin/dashboard");
  }, [user?.token]);

  const loginForm = async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        {
          email,
          password,
        }
      );

      dispatch(login(response.data.token));
      dispatch(toastSuccess("Đăng nhập thành công"));
    } catch (error) {
      console.log(error);
      dispatch(toastError("Đăng nhập không thành công"));
    }
  };

  return (
    <LoginLayoutContainer>
      <LeftLayoutLogin>
        <LoginForm login={loginForm} />
      </LeftLayoutLogin>
      <RightLayoutLogin>
        <ImgLoginBackground src={Img} />
      </RightLayoutLogin>
    </LoginLayoutContainer>
  );
}

export default LoginSection;
