'use client';

import { useRef, useEffect } from 'react';
import { Chart } from 'chart.js/auto';

type ChartElement = HTMLCanvasElement & {
    chart?: Chart; 
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
                            'gray',
                            'gray',
                            'gray',
                            'gray',
                            'gray',
                            'gray',
                            'gray'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    animation: {
                        animateScale: true, 
                        animateRotate: true, 
                        duration: 2000, 
                    },
                    plugins: {
                        legend: {
                            labels: {
                                color: 'white', // Set legend labels to white
                                font: {
                                    size: 14, // Increase label text size
                                    weight: 'bold', // Make label text bold
                                }
                            }
                        },
                        tooltip: {
                            titleFont: {
                                size: 14, // Increase tooltip title size
                                weight: 'bold',
                            },
                            bodyFont: {
                                size: 12, // Increase tooltip body size
                                weight: 'bold',
                            }
                        }
                    }

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
