import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { StateContextProvider } from './context/StateContext'
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <StateContextProvider>
    <App />
  </StateContextProvider>
);
