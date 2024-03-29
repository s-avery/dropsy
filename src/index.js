import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// remove this cra artifact - others
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import BossDropsProvider from "./providers/BossDropsProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BossDropsProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </BossDropsProvider>
    </React.StrictMode>
);

// remove this cra artifact - and others

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
