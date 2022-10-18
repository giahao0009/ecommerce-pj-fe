import React from "react";
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

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: 10000,
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: 1000,
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

function TurnoverChart() {
  return (
    <TurnoverChartContainer>
      <TurnoverChartTitle>Doanh thu</TurnoverChartTitle>
      <Bar options={options} data={data} />
    </TurnoverChartContainer>
  );
}

export default TurnoverChart;
