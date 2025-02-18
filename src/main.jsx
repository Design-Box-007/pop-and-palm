import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { HashRouter } from 'react-router-dom'; // Import HashRouter

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <HashRouter> {/* Wrap App with HashRouter */}
        <App />
      </HashRouter>
    </HelmetProvider>
  </StrictMode>,
);
