import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { LineChart } from "../lineChart/LineChart";
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartPie = () => {
  const [products, setProducts] = useState(null);
  const [offset, setOffset] = useState(0);
  const pageCount = 5;
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products", {
        params: {
          limit: pageCount,
          skip: pageCount * offset,
        },
      })
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, [products]);

  const data = {
    labels: products?.map((el) => el.title),
    datasets: [
      {
        label: "Products",
        data: products?.map((el) => el.stock),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
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
  return (
    <div className="container">
      <div className="chart">
        <div className="chart_items">
          <Pie data={data} />
          <div className="pro_buttons">
            <button onClick={() => setOffset((p) => p - 1)}>preview</button>
            <button onClick={() => setOffset((p) => p + 1)}>next</button>
          </div>
        </div>
        <div className="chart_items">
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default ChartPie;
