import React, {  useRef } from 'react';
import {Card, Box, Container} from '@mui/material'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { 
    Bar,
    getDatasetAtEvent,
    getElementAtEvent,
    getElementsAtEvent,
 } from 'react-chartjs-2';

import { dataChart1, dataChart2, labels } from '../../data/dataChart';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
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
      text: 'Chart.js Bar Chart',
    },
  },
};


const data1 = dataChart1;
const data2 = dataChart2;




export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: data1,
      backgroundColor: 'coral',
    },
    {
      label: 'Dataset 2',
      data: data2,
      backgroundColor: 'rgb(53, 162, 235)',
    },
    
  ],
};

function BarChart() {
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
  return (
    <Card sx={{padding: 4}}>
        <Box>
       
           <Bar 
           ref={chartRef}
           onClick={onClick}
           options={options} 
           data={data} />;
   
        </Box>
    </Card>
  )
}


export default BarChart