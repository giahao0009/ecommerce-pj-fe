import React, { useState } from "react";
import InputField from "../InputField";
import Button from "../button";
import { Color } from "../../assets/styles/variable";
import {
  LoginFormContainer,
  Title,
  SubTitle,
  FormGroup,
  FormControl,
} from "./styled";

function LoginForm({ login }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
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
