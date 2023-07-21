import React, {  useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line,
  getDatasetAtEvent,
  getElementAtEvent,
  getElementsAtEvent 
} from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' 
    },
    title: {
      display: true,
      text: 'Sales Dashboard',
      
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: [3900, 3700, 2900, 4000, 3800, 2950, 3200, 3600, 4200, 3200, 3400, 3900],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function AreaChart() {
  const printDatasetAtEvent = (dataset) => {
        if (!dataset.length) return;
      
        const datasetIndex = dataset[0].datasetIndex;
      
        console.log(data.datasets[datasetIndex].label);
      };
      
      const printElementAtEvent = (element) => {
        if (!element.length) return;
      
        const { datasetIndex, index } = element[0];
      
        console.log(data.labels[index], data.datasets[datasetIndex].data[index]);
      };
      
      const printElementsAtEvent = (elements) => {
        if (!elements.length) return;
      
        console.log(elements.length);
      };
      
      const chartRef = useRef(null);
      
      const onClick = (event) => {
        const chart = chartRef.current;
      
        if (!chart) {
          return;
        }
      
        printDatasetAtEvent(getDatasetAtEvent(chart, event));
        printElementAtEvent(getElementAtEvent(chart, event));
        printElementsAtEvent(getElementsAtEvent(chart, event));
      };
  return <Line
  ref={chartRef}
  onClick={onClick} 
  options={options} 
  data={data} />;
}
