import React from "react";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import { useState, useEffect } from 'react';
import axios from "axios";

function Linechart() {

    const [tigerData, setTigerData] = useState([]);
  const [tigerNames, setTigerNames] = useState([]);
  const [litterSizes, setLitterSizes] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://api.api-ninjas.com/v1/animals?name=tiger",
      headers: { 'X-Api-Key': 'p31mA3zAJl7xjNaNX7Zdaw==Ms3ncGa9PnAHgpIi'},
      contentType: 'application/json',
    })
    .then((response) => {
      // console.log(response.data)
      setTigerData(response.data)

      // Extract tiger names and average litter sizes from response data
      const getTigerNames = response.data.map((tiger) => tiger.name);
      const tigerLitterSizes = response.data.map((tiger) => tiger.characteristics.average_litter_size);
      
      // Update state variables
      setTigerNames(getTigerNames);
      setLitterSizes(tigerLitterSizes);

      console.log(getTigerNames);
      console.log(tigerLitterSizes);
    })
  }, [])

  // Format data for line chart
  const chartData = {
    labels: tigerNames,
    datasets: [
      {
        label: 'Average Litter Size',
        data: litterSizes,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ]
  }

    return (
        <div style={{width: 1100, marginLeft: 110, marginTop: 60}}>
            <Line data={chartData} />
        </div>
    )
}

export default Linechart;