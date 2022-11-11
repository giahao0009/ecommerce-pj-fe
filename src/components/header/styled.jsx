import styled from "styled-components";
import { Color, BoxShadow } from "../../assets/styles/variable";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  padding-right: 25px;
  padding-left: 25px;
  background: ${Color.orangeColor};
  width: 100%;
  box-shadow: ${BoxShadow};
  z-index: 1000;
`;

export const Title = styled.span`
  color: ${Color.whiteColor};
  font-weight: bold;
  font-size: 20px;
`;

export const SettingProfile = styled.div`
  position: relative;
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  background: ${Color.whiteColor};
  width: 100px;
  left: -70px;
  border-radius: 5px;
`;

export const DropdownItem = styled.li`
  padding: 10px;
  font-size: 15px;
  :hover {
    color: ${Color.orangeColor};
  }
`;
