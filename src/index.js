import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import createSagaMiddleware from "redux-saga"
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import rootSaga from "./redux-saga/rootSaga";
import {BrowserRouter} from "react-router-dom";
import usersReducer from "./redux-saga/usersState"

const saga = createSagaMiddleware();
const store = configureStore({
    reducer: {
        users: usersReducer
    }, middleware: [saga]
});
saga.run(rootSaga)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter>
    <Provider store={store}>
        <App/>
    </Provider>
</BrowserRouter>);

