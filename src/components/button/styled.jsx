import styled from "styled-components";
import { BoxShadow } from "../../assets/styles/variable";

export const ButtonWrapper = styled.button`
  background: ${(props) => props.color};
  color: ${(props) => props.background};
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  padding: 13px 0;
  border-radius: 8px;
  outline: none;
  border: 2px solid ${(props) => props.background};
  box-shadow: ${BoxShadow};
  cursor: pointer;
  :hover {
    background: ${(props) => props.background};
    color: ${(props) => props.color};
    transition: all 1s;
  }
`;
