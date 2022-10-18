import React, { useState } from "react";
import { hide } from "../../redux/menuSlice";
import { useDispatch } from "react-redux";
import Icon from "../../assets/icons";
import {
  HeaderContainer,
  Title,
  SettingProfile,
  DropdownMenu,
  DropdownItem,
} from "./styled";

function Header() {
  const dispatch = useDispatch();
  const [dropdown, setDropdown] = useState(false);

  const hideMenu = () => {
    dispatch(hide());
  };

  return (
    <HeaderContainer>
      <Title>AdminPage</Title>
      <SettingProfile>
        <span onClick={() => setDropdown((dropdown) => !dropdown)}>
          <Icon
            icon="FaUserCircle"
            style={{
              color: "#fff",
              fontSize: "30px",
              cursor: "pointer",
              marginRight: "15px",
            }}
          />
        </span>
        {dropdown ? (
          <DropdownMenu>
            <DropdownItem>Profile</DropdownItem>
            <DropdownItem>Log out</DropdownItem>
          </DropdownMenu>
        ) : null}
        <span onClick={() => hideMenu()}>
          <Icon
            icon="GiHamburgerMenu"
            style={{ color: "#fff", fontSize: "30px", cursor: "pointer" }}
          />
        </span>
      </SettingProfile>
    </HeaderContainer>
  );
}

export default Header;
