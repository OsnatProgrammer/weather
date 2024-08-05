import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './context/userContext';
import { SoldierProvider } from './context/soliderContex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <SoldierProvider>
      <App />
    </SoldierProvider>
  </UserProvider>
);

reportWebVitals();
