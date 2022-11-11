import styled from "styled-components";
import { ButtonWrapper } from "../../components/button/styled";
import { Color } from "../../assets/styles/variable";

export const ProductControlWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-bottom: 10px;
  gap: 12px;
  ${ButtonWrapper} {
    width: 150px;
    outline: none;
    border: none;
    background: ${Color.orangeColor};
    color: ${Color.whiteColor};
  }
`;

export const LinkCategory = styled.a`
  :hover {
    color: ${Color.orangeColor};
    cursor: pointer;
  }
`;
