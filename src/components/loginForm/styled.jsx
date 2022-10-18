import styled from "styled-components";
import { Color } from "../../assets/styles/variable";

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
  height: 200px;
  max-height: 100%;
`;

export const Title = styled.h1`
  color: ${Color.orangeColor};
  font-size: 2rem;
  font-weight: 700;
  text-decoration: underline;
  margin-bottom: 23px;
`;

export const SubTitle = styled.h2`
  color: ${Color.textColor};
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 40px;
`;

export const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const FormControl = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;
