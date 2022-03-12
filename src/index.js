import React from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './components/App';
import "bootstrap/dist/css/bootstrap.min.css";
import './estilos/style.css';
import { BrowserRouter } from "react-router-dom";



ReactDOM.render(
   <BrowserRouter> 
  <App />
 </BrowserRouter>, 
  document.getElementById('root')
);


