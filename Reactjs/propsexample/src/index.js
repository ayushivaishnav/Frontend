import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AboutUs from './MyComponents/AboutUs';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App firstName="Ayushi" lastName="Vaishnav" address="Bulandshahr" visitingTime="11"
    name="abc"/>
    <AboutUs companyName="GavsTech" address="OMR, Shollinganalur, Chennai,
    Tamil Nadu"></AboutUs>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
