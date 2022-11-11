import React from "react";
import { CardContainer, CardTitle, CardContent } from "./styled";
import Icon from "../../assets/icons";

function Card({ icon, title, content, styleIcon, iconColor, style }) {
  return (
    <CardContainer style={style}>
      <Icon icon={icon} style={{ ...styleIcon, color: iconColor }} />

      <div>
        <CardTitle>{title}</CardTitle>
        <CardContent>{content}</CardContent>
      </div>
    </CardContainer>
  );
}

export default Card;
