'use client';

import { useRef, useEffect } from 'react';
import { Chart } from 'chart.js/auto';

type ChartElement = HTMLCanvasElement & {
    chart?: Chart; // Make sure to import Chart from 'chart.js'.
};



const LineChart = () => {
    const chartRef = useRef<ChartElement>(null);

    useEffect(() => {
        if (chartRef.current) {

            if (chartRef.current.chart) {
                chartRef.current.chart.destroy();
            }


            const context = chartRef.current.getContext("2d");

            if (context) {

                const newChart = new Chart(context, {
                    type: 'line',
                    data: {

                        labels: [15,37,43,47,57,76,113],
                        datasets: [{
                            label: 'My First Dataset',
                            data: [34, 64, 23, 45, 67, 24, 64],
                            backgroundColor: [
                                'red'
                              
                            ],
                            borderColor: [
                                'red'
                             
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        animation: {
                            // Animation options here
                            duration: 2000, // Duration in milliseconds
                            easing: 'easeInOutQuart', // Easing function to use
                        },

                        scales: {
                            x: {
                                type: "linear",
                                ticks: {
                                    color: 'white', // Set x-axis labels to white
                                    font: {
                                        weight: 'bold', // Make x-axis labels bold
                                    }
                                },
                                grid: {
                                    color: 'rgba(255, 255, 255, 0.3)' 
                                }
                            },
                            y: {
                                beginAtZero: true,
                                ticks: {
                                    color: 'white', // Set y-axis labels to white
                                    font: {
                                        weight: 'bold', // Make y-axis labels bold
                                    }
                                },
                                grid: {
                                    color: 'rgba(255, 255, 255, 0.3)' 
                                }
                            }
                        },
                        plugins: {
                            legend: {
                                labels: {
                                    color: 'white', // Change legend labels to white
                                    font: {
                                        weight: 'bold', // Make legend labels bold
                                    }
                                }
                            }
                        }
    
                    },
                });



                chartRef.current.chart = newChart;
            }
        }
    }, []);

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative'   }}>
            <canvas ref={chartRef} />
        </div>
    );
};

export default LineChart;