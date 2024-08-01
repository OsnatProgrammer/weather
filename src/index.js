import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './context/userContext';
import { HistoryProvider } from './context/historyContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <HistoryProvider>
      <App />
    </HistoryProvider>
  </UserProvider>
);

reportWebVitals();
