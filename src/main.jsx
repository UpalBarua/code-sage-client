import React from 'react';
import ReactDOM from 'react-dom/client';
import { DarkModeProvider, useDarkMode } from './contexts/DarkModeContext';
import App from './components/App/App';
import './assets/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>
);
