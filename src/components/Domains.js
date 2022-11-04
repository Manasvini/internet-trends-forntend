// ./components/Domains.js
import React from "react";
import { useEffect, useState, useRef } from 'react';
import { DataGrid } from '@mui/x-data-grid'
const columns = [
    
    { field: 'rank', headerName: 'Rank' },
    { field: 'rankChange', headerName: 'Rank Change', width: 300 },
    { field: 'domain', headerName: 'Domain', width: 600 }
]



function Domains ()  {
    const getData = async () => {
    const domains = [];
    const resp = await fetch('https://internet-trends.msethuraman3.workers.dev/popular-domains');
    const postsResp = await resp.json();
    let respdata = postsResp.rankingEntries;
    console.log(respdata)
    let json_data = []
    for(let i = 0; i < respdata.length; i++){
        json_data.push({'rank':parseInt(respdata[i].rank)+1, 'rankChange':respdata[i].rankChange, 'domain':respdata[i].domain})
    }
     
    setData(json_data)
  }; 
  useEffect(() => {
  
    console.log('in use effect')
    getData();
  }, []);
  const [data, setData] = useState({datasets:[]});
  return (
       <div style={{ height: 750, width: '70%' }} >
        <h2> Popular Domains </h2>
        <p> Websites are ranked by the domain rank and indicate what domains have changed compared to data from the previous 30 day mark</p>
        <DataGrid
            rows={data}
            columns={columns}
            pageSize={12}
            getRowId={row => row.domain}
         />
            <br/>
        </div>
    );
}


export default Domains;
