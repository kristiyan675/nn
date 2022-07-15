import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './store/index';
import { Provider } from 'react-redux';
import axios from 'axios';


axios.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('authorization')
  if (token) {
    config.headers = {
      Authorization: token
    }
  }
  // sessionStorage.setItem('authorization', `Bearer ${token}`)

  return config;

  }, function (error) {
    return Promise.reject(error);
  });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  < Provider store={store} >
    <App />
  </ Provider>

);
