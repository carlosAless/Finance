import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const Grafico = () => {
  // Dados originais (exemplo)
  const rawData = [5, 10, 15, 20, 25, 30];
  const labels = ["Alimentação", "Transporte", "Moradia", "Lazer", "Salário", "Outros"];

  // Calcula o total e converte para porcentagem
  const total = rawData.reduce((sum, value) => sum + value, 0);
  const percentageData = rawData.map((value) => Math.round((value / total) * 100));

  // Configuração dos dados do gráfico
  const data = {
    labels: labels,
    datasets: [
      {
        data: percentageData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Configurações do gráfico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Distribuição por Categoria (%)",
        font: {
          size: 16,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = labels[context.dataIndex] || "";
            const value = context.raw;
            const originalValue = rawData[context.dataIndex];
            return `${label}: ${value}% (R$ ${originalValue.toFixed(2)})`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: (value) => `${value}%`,
        },
        title: {
          display: true,
          text: "Porcentagem",
        },
      },
      x: {
        title: {
          display: true,
          text: "Categorias",
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};
