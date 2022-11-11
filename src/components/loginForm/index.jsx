import React, { useState } from "react";
import InputField from "../InputField";
import Button from "../button";
import { Color } from "../../assets/styles/variable";
import { loginUser } from "../../redux/apiRequest";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toastSuccess, toastError } from "../../redux/toastSlice";
import {
  LoginFormContainer,
  Title,
  SubTitle,
  FormGroup,
  FormControl,
} from "./styled";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const user = { email: email, password: password };
      loginUser(user, dispatch, navigate);
      toastSuccess("Đăng nhập thành công");
    } catch (err) {
      toastError("Không thể đăng nhập");
    }
  };

  return (
    <LoginFormContainer>
      <Title>AdminPage</Title>
      <SubTitle>Login into your account</SubTitle>
      <FormGroup onSubmit={(e) => handleSubmit(e)}>
        <FormControl>
          <InputField
            label="Email"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            login
          />
        </FormControl>
        <FormControl>
          <InputField
            label="Password"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            login
          />
        </FormControl>
        <FormControl>
          <Button
            color={Color.whiteColor}
            background={Color.orangeColor}
            type="submit"
          >
            Login
          </Button>
        </FormControl>
      </FormGroup>
    </LoginFormContainer>
  );
}

export default LoginForm;
