import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppClass from './App_class_component';
import reportWebVitals from './reportWebVitals';
import AppFunctionalComponent from './App_functional_component';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    {/* <AppClass /> */}
    <AppFunctionalComponent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
