'use client';

import { useRef, useEffect } from 'react';
import { Chart } from 'chart.js/auto';

type ChartElement = HTMLCanvasElement & {
    chart?: Chart; 
};



const LineInteractionGraph = () => {
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
                                'yellow'
                              
                            ],
                            borderColor: [
                                'yellow'
                             
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        animation: {
                         
                            duration: 2000, 
                            easing: 'easeInOutQuart', 
                        },

                        scales: {
                            x: {
                                type: "linear",
                                ticks: {
                                    color: 'white', // Change x-axis labels to white
                                    font: {
                                        size: 14, // Make labels larger
                                        weight: 'bold', // Make labels bold
                                    }
                                },
                                grid: {
                                    color: 'rgba(255, 255, 255, 0.3)' // Change grid lines color to lighter white
                                }
                            },
                            y: {
                                beginAtZero: true,
                                ticks: {
                                    color: 'white', // Change y-axis labels to white
                                    font: {
                                        size: 14, // Make labels larger
                                        weight: 'bold', // Make labels bold
                                    }
                                },
                                grid: {
                                    color: 'rgba(255, 255, 255, 0.3)' // Change grid lines color to lighter white
                                }
                            }
                        },
                        plugins: {
                            legend: {
                                labels: {
                                    color: 'white', // Change legend labels to white
                                    font: {
                                        size: 14,
                                        weight: 'bold'
                                    }
                                }
                            },
                            title: {
                                display: true,
                                text: 'Line Interaction Graph',
                                color: 'white',
                                font: {
                                    size: 16,
                                    weight: 'bold'
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
        <div style={{ width: '100%', height: '100%', position: 'relative'  }}>
            <canvas ref={chartRef} />
        </div>
    );
};

export default LineInteractionGraph;