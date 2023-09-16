import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Context } from './context/Context'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Context>
      <App/>
  </Context>
  </BrowserRouter>

)


