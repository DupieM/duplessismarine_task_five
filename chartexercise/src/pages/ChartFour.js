import React from "react";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'

function Doughnutchart() {

    const data = {
        labels: ['Dark Blue shoes', 'Aqua shoes', 'Violet shoes', 'Rose shoes', 'Sandy Brown shoes', 'Yellow shoes'],
        datasets: [
          {
            label: '# shoes left',
            data: [10, 20, 8, 10, 19, 15],
            backgroundColor: [
              'rgba(0, 0, 139, 0.2)',
              'rgba(0, 225, 225, 0.2)',
              'rgba(238, 130, 238, 0.2)',
              'rgba(255, 72, 208, 0.2)',
              'rgba(244, 164, 96, 0.2)',
              'rgba(255, 255, 0, 0.2)',
            ],
            borderColor: [
              'rgba(0, 0, 139, 1)',
              'rgba(0, 225, 225, 1)',
              'rgba(238, 130, 238, 1)',
              'rgba(255, 72, 208, 1)',
              'rgba(244, 164, 96, 1)',
              'rgba(255, 255, 0, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

    return (
        <div style={{width: 600, marginLeft: 400, marginTop: 60}}>
            <Doughnut data={data} />
        </div>
    )
}

export default Doughnutchart;