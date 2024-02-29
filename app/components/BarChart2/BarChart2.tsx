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
                        label: 'My First ',
                        data: [45, 59, 40, 21, 66],
                        backgroundColor: [
                            '#9eee02',
                            '#ffff00',
                            '#ffbb34',
                            '#fe0100',
                            '#cd0074',
                           
                          
                        ],
                        borderColor: [
                            'gray',
                            'gray',
                            'gray',
                            'gray',
                            'gray',
                           
                           
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
                            type: "category",
                            ticks: {
                                color: 'white', // Change x-axis labels to white
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
                                color: 'white', // Change y-axis labels to white
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
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <canvas ref={chartRef} />
        </div>
    );
};

export default BarChart2;
