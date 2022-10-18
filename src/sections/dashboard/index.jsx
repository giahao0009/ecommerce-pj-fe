import React from "react";
import TurnoverChart from "../../components/turnoverChart";
import Card from "../../components/card";
import { Color } from "../../assets/styles/variable";
import {
  DashboardContainer,
  TitleDashboard,
  CardDashboardContainer,
} from "./styled";

const styleIcon = {
  marginRight: "20px",
  fontSize: "30px",
};

function Dashboard() {
  return (
    <DashboardContainer>
      <TitleDashboard>Dashboard</TitleDashboard>
      <CardDashboardContainer>
        <Card
          icon="FaWallet"
          title="Doanh Thu"
          content="1,000,000 VND"
          iconColor="red"
          styleIcon={styleIcon}
        />
        <Card
          icon="FaFileInvoiceDollar"
          title="Đơn Hàng"
          content="1,000,000 VND"
          iconColor="green"
          styleIcon={styleIcon}
        />
      </CardDashboardContainer>
      <TurnoverChart />
    </DashboardContainer>
  );
}

export default Dashboard;
