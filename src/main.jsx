import React from 'react';
import ReactDOM from 'react-dom/client';
import { DarkModeProvider } from './contexts/DarkModeContext';
import { AuthProvider } from './contexts/AuthContext';
import App from './components/App/App';
import './assets/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </DarkModeProvider>
  </React.StrictMode>
);
