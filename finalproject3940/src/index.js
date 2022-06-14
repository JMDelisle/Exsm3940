import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import rootReducer from './reducers'

const store = createStore(rootReducer);

const container = document.getElementById("root");
const root = createRoot(container);

function renderListener() {



root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App reduxStore = {store} />
    </BrowserRouter>
  </React.StrictMode>
);
}
renderListener();
store.subscribe(renderListener);