import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux"; //for connecting the redux to react
import App from './App';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> 
    <App />
    </Provider>
  </React.StrictMode>
);


