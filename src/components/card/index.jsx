import React from "react";
import { CardContainer, CardTitle, CardContent } from "./styled";
import Icon from "../../assets/icons";

function Card({ icon, title, content, styleIcon, iconColor }) {
  return (
    <CardContainer>
      <Icon icon={icon} style={{ ...styleIcon, color: iconColor }} />

      <div>
        <CardTitle>{title}</CardTitle>
        <CardContent>{content}</CardContent>
      </div>
    </CardContainer>
  );
}

export default Card;
