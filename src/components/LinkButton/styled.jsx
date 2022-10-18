import styled from "styled-components";

export const LinkButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  cursor: pointer;
  transition: 0.3s;
  opacity: 0.7;
  :hover {
    opacity: 1;
  }
`;
