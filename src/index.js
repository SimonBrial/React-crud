import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.module.css';
import Header from './components/Header';
import InputsCrud from './components/InputsCrud';
import CrudCard from './components/CrudCard';
import reportWebVitals from './reportWebVitals';

import { ContextProvider } from './context/GlobalContext'

ReactDOM.render(
  <React.StrictMode>
  <ContextProvider>
    <Header />
      <div className={styles.main}>
        <InputsCrud />
        <CrudCard />
      </div>
  </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
