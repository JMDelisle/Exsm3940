import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';

import rootReducer from './reducers'

const middlewares = [ReduxThunk];
const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)),);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);