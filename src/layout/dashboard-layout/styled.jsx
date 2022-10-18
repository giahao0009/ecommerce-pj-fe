import styled from "styled-components";

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
`;

export const RightLayout = styled.div`
  width: 80%;
`;

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
`;

export const RightContainer = styled.div`
  padding: 20px;
`;
