import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { format, compareAsc } from 'date-fns';
import { es, ru } from 'date-fns/locale';

console.log(format(new Date(), 'yyyy-MMM-dd-E', { locale: ru }));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);