import React from "react";
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'

function Piechart() {

    const data = {
        labels: ['Lion', 'Tiger', 'Birds', 'Elefant', 'Whale', 'Fish'],
        datasets: [
          {
            label: '# species left',
            data: [12, 19, 35, 9, 20, 50],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

    return (
        <div style={{width: 600, marginLeft: 400, marginTop: 60}}>
            <Pie data={data} />
        </div>
    )
}

export default Piechart;