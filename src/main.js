import { jsx as _jsx } from "react/jsx-runtime";
// @ts-nocheck
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
let persistor = persistStore(store);
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(BrowserRouter, { children: _jsx(Provider, { store: store, children: _jsx(PersistGate, { persistor: persistor, children: _jsx(App, {}) }) }) }));
