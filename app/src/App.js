import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";

const app = (
    <Provider store={configureStore()}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(app, document.getElementById("app"))