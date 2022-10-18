import styled from "styled-components";
import { Color } from "../../assets/styles/variable";
import {
  moveFromLeft,
  moveFromRight,
  moveFromTop,
} from "../../assets/styles/animation";

export const LeftMenuContainer = styled.div`
  width: 100%;
  background-color: #fff;
  border: 2px solid #fff;
  position: sticky;
  top: 0;
`;

// Info user
export const InfoUserWrapper = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #eee;
`;

export const UserImage = styled.img`
  width: 35%;
  border-radius: 50%;
`;

export const UserControl = styled.div``;

export const Username = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${Color.orangeColor};
  margin-bottom: 5px;
`;

export const UserRole = styled.p`
  font-size: 15px;
  opacity: 0.7;
  margin-bottom: 10px;
`;

// Left menu item
export const ItemMenuWrapper = styled.ul`
  list-style: none;
  background: #fff;
  width: 100%;
`;

export const BeforeLi = `
  :after {
    content: "";
    position: absolute;
    right: 0;
    border-right: 5px solid ${Color.orangeColor};
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
  }
`;

export const AfterLi = `
  :before {
    content: "";
    position: absolute;
    left: 0;
    border-left: 5px solid ${Color.orangeColor};
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
  }
`;

export const ActiveLi = `
  color: ${Color.orangeColor};
  :after {
    content: "";
    position: absolute;
    right: 0;
    border-right: 5px solid ${Color.orangeColor};
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
  }
  :before {
    content: "";
    position: absolute;
    left: 0;
    border-left: 5px solid ${Color.orangeColor};
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
  }
`;

export const ItemMenuLi = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border: 2px solid #eee;
  :hover {
    cursor: pointer;
    color: #e67e22;
    span {
      animation: ${moveFromTop} 300ms ease-in-out;
    }
    p:first-child {
      animation: ${moveFromLeft} 300ms ease-in-out;
    }
    p:last-child {
      animation: ${moveFromRight} 300ms ease-in-out;
    }
    ${BeforeLi}
    ${AfterLi}
  }

  // Active link
  ${(props) => (props.active ? ActiveLi : "none")}
`;

export const IconWrapper = styled.span``;

export const ItemTitle = styled.div`
  display: inline-block;
  width: 70%;
`;

export const StrongTitle = styled.p`
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 10px;
  font-size: 1.1rem;
`;

export const SmallTitle = styled.p`
  text-transform: capitalize;
  font-size: 15px;
  opacity: 0.7;
`;
