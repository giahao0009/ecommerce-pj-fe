import styled from "styled-components";
import { Color } from "../../assets/styles/variable";
import { CardContainer } from "../../components/card/styled";

export const DashboardContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const TitleDashboard = styled.h2`
  color: ${Color.textColor};
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const CardDashboardContainer = styled.div`
  display: flex;
  ${CardContainer} {
    margin-right: 10px;
  }
`;
