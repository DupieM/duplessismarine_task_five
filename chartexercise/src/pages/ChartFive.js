import React from "react";
import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'

function PolarAreachart() {

    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 30, 25, 20, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)',
            ],
            borderWidth: 1,
          },
        ],
    };

    return (
        <div style={{width: 600, marginLeft: 400, marginTop: 60}}>
            <PolarArea data={data} />
        </div>
    )
}

export default PolarAreachart;