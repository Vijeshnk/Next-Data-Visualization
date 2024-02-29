'use client';

import { useRef, useEffect } from 'react';
import { Chart } from 'chart.js/auto';

type ChartElement = HTMLCanvasElement & {
    chart?: Chart;
};



const PieChart = () => {
    const chartRef = useRef<ChartElement>(null);

    useEffect(() => {
        if (chartRef.current) {

            if (chartRef.current.chart) {
                chartRef.current.chart.destroy();
            }


            const context = chartRef.current.getContext("2d");

            if (context) {

                const newChart = new Chart(context, {
                    type: 'pie',
                    data: {

                        labels: ["John", "Jan", "Doe", "April", "May"],
                        datasets: [{
                            label: 'My First Dataset',
                            data: [65, 59, 80, 81, 56],
                            backgroundColor: [
                                '#40b8ea',
                                '#9bca3d',
                                '#f5ec1f',
                                '#faa51a',
                                '#ed1e24',
                                '#C81D25',
                                '#badd8b',



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
                        plugins: {
                            legend: {
                                labels: {
                                    color: 'white', // Set legend labels to white
                                    font: {
                                        size: 16, // Increase label text size
                                        weight: 'bold' // Make label text bold
                                    }
                                }
                            },
                            tooltip: {
                                titleFont: {
                                    size: 16, // Increase tooltip title size (Chart.js 2.x)
                                    weight: 'bold'
                                },
                                bodyFont: {
                                    size: 14, // Increase tooltip body size (Chart.js 2.x)
                                    weight: 'bold'
                                }
                            }
                        },

                        animation: {
                            animateScale: true,
                            animateRotate: true,
                            duration: 2000,
                        },


                    },
                });



                chartRef.current.chart = newChart as Chart;
            }
        }
    }, []);

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <canvas ref={chartRef} />
        </div>
    );
};

export default PieChart;
