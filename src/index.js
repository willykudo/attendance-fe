import React from 'react';
import ReactDOM from 'react-dom/client';
// react query
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { HelmetProvider } from "react-helmet-async";
// redux
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react";
// query config
import queryConfig from "configures/queryConfig";
import { store, persistor } from "store";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const queryClient = new QueryClient(queryConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <App />
        </HelmetProvider>
        {process.env.NODE_ENV !== "production" && <ReactQueryDevtools position="bottom-right" />}
      </QueryClientProvider>
    </PersistGate>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
