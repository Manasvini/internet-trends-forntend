// ./components/LineChart.js
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import React from "react";
import {useQuery} from 'react-query';
import { Line } from "react-chartjs-2";
import { useEffect, useState, useRef } from 'react';

function Attackvolume ()  {
    const getData = async () => {
     const http_data = [];
    const total_data = [];
    const labels = [];
      const resp = await fetch('https://internet-trends.msethuraman3.workers.dev/attack-layer3');
      const postsResp = await resp.json();
        let respdata = postsResp.data;
    console.log(respdata)
    for(let i = 0; i < respdata.length; i++){
        labels.push(respdata[i].timestamp);
        total_data.push(parseFloat(respdata[i].value))
    }
    
    setData({
    labels: labels,
    datasets: [

        {
            label:'Attack Volume (Normalized)',
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
            <br/> <br/>
            <h2>One Month Attack Layer3</h2>
            <Line data={data}  />
        </div>
    );
}


export default Attackvolume;
