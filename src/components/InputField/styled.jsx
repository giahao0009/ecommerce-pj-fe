import styled from "styled-components";
import { Color } from "../../assets/styles/variable";

export const Wrapper = styled.div``;

export const InputLoginWrapper = styled.div``;

export const LabelLogin = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 16px;
  color: ${Color.textColor};
`;

export const InputLogin = styled.input`
  min-width: 100%;
  padding: 13px 0px;
  text-indent: 19px;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  background: ${Color.background};
  outline: none;
`;
