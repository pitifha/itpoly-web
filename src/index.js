import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Import the custom styles (including Tailwind)
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create the root of the React app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Measure app performance
reportWebVitals();
