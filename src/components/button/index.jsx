import React from "react";
import { ButtonWrapper } from "./styled";

function Button({ onClick, children, color, background }) {
  return (
    <ButtonWrapper onClick={onClick} color={color} background={background}>
      {children}
    </ButtonWrapper>
  );
}

export default Button;
