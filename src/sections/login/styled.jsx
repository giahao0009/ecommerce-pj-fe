import styled from "styled-components";
import { Color, BoxShadow } from "../../assets/styles/variable";

export const LoginLayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: 100vh;
`;

export const LeftLayoutLogin = styled.div`
  background: ${Color.whiteColor};
  box-shadow: ${BoxShadow};
`;

export const RightLayoutLogin = styled.div`
  background: ${Color.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgLoginBackground = styled.img``;
