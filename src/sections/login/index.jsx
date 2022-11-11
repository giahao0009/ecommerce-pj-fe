import React, { useState, useEffect } from "react";
import Img from "../../assets/image/img_login_background.png";
import LoginForm from "../../components/loginForm";
import {
  LoginLayoutContainer,
  LeftLayoutLogin,
  RightLayoutLogin,
  ImgLoginBackground,
} from "./styled";

function LoginSection() {
  return (
    <LoginLayoutContainer>
      <LeftLayoutLogin>
        <LoginForm />
      </LeftLayoutLogin>
      <RightLayoutLogin>
        <ImgLoginBackground src={Img} />
      </RightLayoutLogin>
    </LoginLayoutContainer>
  );
}

export default LoginSection;
