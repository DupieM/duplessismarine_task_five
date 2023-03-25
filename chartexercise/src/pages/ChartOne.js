import React from "react";
import {Bar} from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

function Barchart() {

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const data = {
        labels,
        datasets: [
          {
            label: 'Coke',
            data: [12, 19, 3, 5, 2, 3, 45, 9, 60, 55, 12, 59],
            backgroundColor: 'rgba(57, 35, 35, 0.5)',
          },
          {
            label: 'Pepsie',
            data: [16, 23, 45, 1, 50, 30, 10, 47, 60, 59, 43, 52],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };

    return (
        <div style={{width: 1300, paddingLeft: 70, paddingTop: 40}}>
            <Bar data={data} />
        </div> 
    )
}

export default Barchart;