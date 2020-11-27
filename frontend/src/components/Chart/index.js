import React, { useState, useEffect } from 'react';
import Chart from 'chart.js';

export default function ChartComponent({ id, children: data }) {
  const [firstChart, setFirstChart] = useState(new Chart('myChart', data));

  function removeData(chart) {
    let alteredChart = new Chart('myChart',data);
    alteredChart.data.labels.pop();
    alteredChart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    alteredChart.update();
    setFirstChart(alteredChart);
}

  return (
    <>
      <canvas id={id} width="400" height="400"></canvas>
      <button onClick={removeData}>apagar</button>
    </>
  );
}
