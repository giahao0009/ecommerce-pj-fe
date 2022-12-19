import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { TurnoverChartContainer, TurnoverChartTitle } from "./styled";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function TurnoverChart() {
  const [featchData, setFetchData] = useState([]);
  const data = {
    labels,
    datasets: [
      {
        label: "Số hoá đơn",
        data: labels.map((item, index) => {
          return featchData[index + 1]?.array?.length;
        }),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  useEffect(() => {
    const featchdata = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API_ENDPOINT}/order/chartIncome`
      );
      console.log(res.data);
      setFetchData(res.data);
    };
    featchdata();
  }, []);
  return (
    <TurnoverChartContainer>
      <TurnoverChartTitle>Số đơn hàng</TurnoverChartTitle>
      <Bar options={options} data={data} />
    </TurnoverChartContainer>
  );
}

export default TurnoverChart;
