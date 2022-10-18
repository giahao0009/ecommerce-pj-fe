import styled from "styled-components";
import { Color } from "../../assets/styles/variable";

export const TurnoverChartContainer = styled.div`
  background: ${Color.whiteColor};
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
`;

export const TurnoverChartTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 15px;
  color: ${Color.textColor};
  font-weight: 700;
  text-transform: capitalize;
`;
