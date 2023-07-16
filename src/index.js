import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import createSagaMiddleware from "redux-saga"
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import rootSaga from "./redux-saga/rootSaga";
import {HashRouter} from "react-router-dom";
import usersReducer from "./redux-saga/usersState";
import signUpReducer from "./redux-saga/signUpState";
import isLoginReducer from "./redux-saga/isLoginedState"

const saga = createSagaMiddleware();
const store = configureStore({
    reducer: {
        users: usersReducer,
        signup: signUpReducer,
        isLogin: isLoginReducer
    }, middleware: [saga]
});
saga.run(rootSaga)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HashRouter>
    <Provider store={store}>
        <App/>
    </Provider>
</HashRouter>);

