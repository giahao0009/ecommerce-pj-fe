import React, { useEffect, useState } from "react";
import TurnoverChart from "../../components/turnoverChart";
import Card from "../../components/card";
import axios from "axios";
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
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    const featchData = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API_ENDPOINT}/order/totalIncome`
      );
      setAmount(res.data);
    };
    featchData();
  }, []);
  return (
    <DashboardContainer>
      <TitleDashboard>Dashboard</TitleDashboard>
      <CardDashboardContainer>
        <Card
          icon="FaWallet"
          title="Doanh Thu"
          content={amount?.toLocaleString("it-IT", {
            style: "currency",
            currency: "VND",
          })}
          iconColor="red"
          styleIcon={styleIcon}
        />
      </CardDashboardContainer>
      <TurnoverChart />
    </DashboardContainer>
  );
}

export default Dashboard;
