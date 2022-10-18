import styled from "styled-components";
import { Color } from "../../assets/styles/variable";

export const CardContainer = styled.div`
  padding: 20px 50px;
  padding-left: 20px;
  min-width: 150px;
  background: ${Color.whiteColor};
  border-radius: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
`;

export const CardTitle = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${Color.textColor};
  margin-bottom: 5px;
`;

export const CardContent = styled.p``;
