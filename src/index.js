import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import store from './store'
import { FlashProvider, DialogProvider } from "react-simple-widgets";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <DialogProvider>
        <FlashProvider >
          <App />
        </FlashProvider>
      </DialogProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

