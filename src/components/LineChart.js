// ./components/LineChart.js

import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from 'react';
const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};
const Internetdata =  () => {
    const [data, setData] = useState([]);
      useEffect(() => {
    const getInternetdata = async () => {
      const resp = await fetch('https://serverless-api.msethuraman3.workers.dev/api/posts');
      const postsResp = await resp.json();
      console.log(postsResp)
        setData(postsResp);
    };

    getInternetdata();
  }, []);
}
const LineChart = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
