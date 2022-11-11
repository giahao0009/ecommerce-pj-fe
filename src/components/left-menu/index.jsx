import React from "react";
import { useLocation, Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import menuList from "../../constant/menuList";
import LinkButton from "../LinkButton";
import {
  LeftMenuContainer,
  UserControl,
  UserImage,
  Username,
  UserRole,
  ItemMenuWrapper,
  StrongTitle,
  SmallTitle,
  ItemMenuLi,
  IconWrapper,
  ItemTitle,
  InfoUserWrapper,
} from "./styled";

function ItemMenu({ label, icon, active, path }) {
  return (
    <Link to={path}>
      <ItemMenuLi active={active}>
        <IconWrapper>{icon}</IconWrapper>
        <ItemTitle>
          <StrongTitle>{label}</StrongTitle>
          <SmallTitle>{label}</SmallTitle>
        </ItemTitle>
      </ItemMenuLi>
    </Link>
  );
}

function LeftMenu({ logoutAction }) {
  const location = useLocation();

  const logout = () => {
    logoutAction();
  };
  return (
    <LeftMenuContainer>
      <InfoUserWrapper>
        <UserImage src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" />
        <UserControl>
          <Username>Nguyễn Gia Hào</Username>
          <UserRole>Admin</UserRole>
          <LinkButton color="#FF0000" fontSize="18px" onClick={logout}>
            Đăng xuất
            <BiLogOut style={{ marginLeft: "5px" }} />
          </LinkButton>
        </UserControl>
      </InfoUserWrapper>
      <ItemMenuWrapper>
        {menuList.map((item, index) => (
          <ItemMenu
            label={item.label}
            key={index}
            icon={item.icon}
            path={item.path}
            active={location.pathname.includes(item.path) ? true : false}
          />
        ))}
      </ItemMenuWrapper>
    </LeftMenuContainer>
  );
}

export default LeftMenu;
