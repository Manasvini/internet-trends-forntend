// ./components/LineChart.js
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import React from "react";
import {useQuery} from 'react-query';
import { Line } from "react-chartjs-2";
import { useEffect, useState, useRef } from 'react';

async function fetchData() {
     const resp = await fetch('https://internet-trends.msethuraman3.workers.dev/traffic-change');
      const {data} = await resp.json();
    return data
}
function Internetdata ()  {
    const getData = async () => {
     const http_data = [];
    const total_data = [];
    const labels = [];
      const resp = await fetch('https://internet-trends.msethuraman3.workers.dev/traffic-change');
      const postsResp = await resp.json();
        let respdata = postsResp.data;
    //console.log(respdata)
    for(let i = 0; i < respdata.http.length; i++){
        labels.push(respdata.http[i].timestamp);
        http_data.push(parseFloat(respdata.http[i].value))
    }
    for(let i = 0; i < respdata.total.length; i++){
        total_data.push(parseFloat(respdata.total[i].value))
    }
    
    setData({
    labels: labels,
    datasets: [

        {
            label:'HTTP Traffic (Normalized)',
            backgroundColor: "rgb(75,192,192)",
            borderColor: "rgb(75,192,192)",
            data :http_data,
        },
        {
            label:'Total Traffic (Normalized)',
            backgroundColor: "#742774",
            borderColor: "#742774",
            data :total_data,
        },

   ]})
  }; 
  useEffect(() => {
  
    // You can await here
    console.log('in use effect')
    getData();
    // ...
  }, []);
  const [data, setData] = useState({datasets:[]});
  return (
        <div>
            <h2>One Month Traffic Change</h2>
            <Line data={data}  />
        </div>
    );
}


export default Internetdata;
