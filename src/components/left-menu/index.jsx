import React from "react";
import { useLocation, Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import menuList from "../../constant/menuList";
import LinkButton from "../LinkButton";
import { useSelector } from "react-redux";
import { FaUserAlt } from "react-icons/fa";
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

const iconStyle = {
  fontSize: "20px",
  margin: "0 10px 0 0",
};

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
  const user = useSelector((state) => state.auth.login?.userInfo?.user);
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
        {menuList.map((item, index) => {
          return (
            <ItemMenu
              label={item.label}
              key={index}
              icon={item.icon}
              path={item.path}
              active={location.pathname.includes(item.path) ? true : false}
            />
          );
        })}
        {user.role == 1 && (
          <ItemMenu
            label="Người dùng"
            key="option-5"
            icon={<FaUserAlt style={iconStyle} />}
            path="/admin/users"
            active={location.pathname.includes("/admin/users") ? true : false}
          />
        )}
      </ItemMenuWrapper>
    </LeftMenuContainer>
  );
}

export default LeftMenu;
