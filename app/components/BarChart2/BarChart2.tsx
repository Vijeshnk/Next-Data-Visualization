'use client';

import { useRef, useEffect } from 'react';
import { Chart } from 'chart.js/auto';

type ChartElement = HTMLCanvasElement & {
    chart?: Chart; // Make sure to import Chart from 'chart.js'.
};



const BarChart2 = () => {
    const chartRef = useRef<ChartElement>(null);

    useEffect(() => {
        if (chartRef.current) {

            if (chartRef.current.chart) {
                chartRef.current.chart.destroy();
            }


            const context = chartRef.current.getContext("2d");

            if(context){

            const newChart = new Chart(context, {
                type: 'bar',
                data: {

                    labels: ["John", "Jan", "Doe", "April", "May", ],
                    datasets: [{
                        label: 'My First Dataset',
                        data: [65, 59, 80, 81, 56],
                        backgroundColor: [
                            'red',
                            'blue',
                            'yellow',
                            'violet',
                            'green',
                           
                          
                        ],
                        borderColor: [
                            'red',
                            'blue',
                            'yellow',
                            'violet',
                            'green',
                           
                           
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    animation: {
                        duration: 2000, 
                        easing: 'easeInOutCubic',
                    },
                    scales: {
                        x: {
                            type: "category"
                        },
                        y: {
                            beginAtZero: true
                        }
                    }
                },
            });
        
        

            chartRef.current.chart = newChart;
        }
        }
    }, []);

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <canvas ref={chartRef} />
        </div>
    );
};

export default BarChart2;
