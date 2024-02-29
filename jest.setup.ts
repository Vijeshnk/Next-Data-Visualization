// jest.setup.ts

// Import this at the top
import '@testing-library/jest-dom';

// Mock HTMLCanvasElement.getContext
HTMLCanvasElement.prototype.getContext = jest.fn();
