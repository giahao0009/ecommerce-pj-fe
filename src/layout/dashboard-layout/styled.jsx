import styled from "styled-components";
import { Color } from "../../assets/styles/variable";

export const MainLayout = styled.div`
  background: #eee;
  display: flex;
  min-height: 100vh;
`;

export const LeftLayout = styled.div`
  width: 20%;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  height: 100vh;
  background-color: ${Color.whiteColor};
  overflow-y: scroll;
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #000000;
    border: 2px solid #555555;
  }
`;

export const RightLayout = styled.div`
  width: 80%;
`;

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const RightContainer = styled.div`
  padding: 20px;
`;
