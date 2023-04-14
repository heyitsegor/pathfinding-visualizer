import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import './scss/index.scss';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(<App />);
