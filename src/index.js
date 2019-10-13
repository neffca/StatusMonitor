import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import {createStore} from 'redux';
import rootReducer from "./scripts/reducers";

import App from './App';

import './index.css';

const store = createStore(rootReducer);

export default store;
ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
