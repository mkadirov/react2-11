import React, {  useRef } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { 
    PolarArea,
    getDatasetAtEvent,
    getElementAtEvent,
    getElementsAtEvent,
} from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
  datasets: [
    {
      label: '# of Votes',
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        'red',
        'green',
        'yellow',
        
        'grey',
        'blue'
      ],
      borderWidth: 1,
    },
  ],
};



export default function PolarAreaChart() {
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
  return(
  
    <PolarArea ref={chartRef}
    onClick={onClick}  data={data} />
  )
  
}
