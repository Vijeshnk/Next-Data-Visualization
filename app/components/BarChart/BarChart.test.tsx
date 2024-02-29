import React from 'react';
import { render, screen } from '@testing-library/react';
import BarChart from './BarChart'; 

describe('BarChart', () => {
// Adjust the test to find the canvas element using document.querySelector
it('renders a canvas for the chart', () => {
    render(<BarChart />);
    const canvasElement = document.querySelector('canvas'); // Use document.querySelector to find the canvas
    expect(canvasElement).toBeInTheDocument();
  });
  


});
