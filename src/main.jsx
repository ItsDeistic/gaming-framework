import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { FrameworkProvider } from './context/FrameworkContext';
import { Toaster } from 'react-hot-toast';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FrameworkProvider>
        <App />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#13162a',
              color: '#fff',
              border: '1px solid #1e2340',
            },
          }}
        />
      </FrameworkProvider>
    </BrowserRouter>
  </React.StrictMode>
);
