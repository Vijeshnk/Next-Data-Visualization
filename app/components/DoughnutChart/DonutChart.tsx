'use client';

import { useRef, useEffect } from 'react';
import { Chart } from 'chart.js/auto';

type ChartElement = HTMLCanvasElement & {
    chart?: Chart; // Make sure to import Chart from 'chart.js'.
};



const DoughnutChart = () => {
    const chartRef = useRef<ChartElement>(null);

    useEffect(() => {
        if (chartRef.current) {

            if (chartRef.current.chart) {
                chartRef.current.chart.destroy();
            }


            const context = chartRef.current.getContext("2d");

            if(context){

            const newChart = new Chart(context, {
                type: 'doughnut',
                data: {

                    labels: ["John", "Jan", "Doe", "April", "May", "June", "July"],
                    datasets: [{
                        label: 'My First Dataset',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        backgroundColor: [
                            'red',
                            'teal',
                            'aqua',
                            'yellow',
                            'green',
                            'blueviolet',
                            'darkorange'
                        ],
                        borderColor: [
                            'red',
                            'teal',
                            'aqua',
                            'yellow',
                            'green',
                            'blueviolet',
                            'darkorange'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    animation: {
                        animateScale: true, // Animate the scale of the pie/doughnut chart from the center.
                        animateRotate: true, // Animate the rotation of the pie/doughnut chart.
                        duration: 2000, // Duration in milliseconds
                    },

                
                },
            });
        
        

            chartRef.current.chart = newChart as Chart;
        }
        }
    }, []);

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative'  }}>
            <canvas ref={chartRef} />
        </div>
    );
};

export default DoughnutChart;
