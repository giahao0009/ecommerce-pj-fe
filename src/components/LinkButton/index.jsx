import React from "react";
import { LinkButtonWrapper } from "./styled";

function LinkButton(props) {
  return (
    <LinkButtonWrapper
      color={props.color}
      fontSize={props.fontSize}
      onClick={props.onClick}
    >
      {props.children}
    </LinkButtonWrapper>
  );
}

export default LinkButton;
