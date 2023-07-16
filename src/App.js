import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUsersFetch} from "./redux-saga/usersState";
import Main from "./components/Main/Main";
import {Redirect, Route, Switch} from "react-router-dom";
import AboutUser from "./components/AboutUser/AboutUser";
import SignUp from "./components/SignUp/SignUp";
import {setIsLogin} from "./redux-saga/isLoginedState"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {

    const dispatch = useDispatch();
    const isLogin = useSelector(state => state.isLogin.isLogin);

    useEffect(() => {
        dispatch(getUsersFetch())
    }, [dispatch]);

    const checkToken = () => {
        const token = localStorage.getItem("token");
        if (token) {
            dispatch(setIsLogin(true));
        } else {
            dispatch(setIsLogin(false));
        }
    }

    useEffect(() => {
        checkToken()
    }, [checkToken]);

    console.log(isLogin)

    return (<main className="App">
        <Switch>
            <Route path="/antipoff-group-test/signup">
                <SignUp/>
            </Route>
            <ProtectedRoute exact path="/antipoff-group-test" component={Main}/>
            <ProtectedRoute exact path="/antipoff-group-test/about-user/:id" component={AboutUser}/>
            <Route>
                {isLogin ? <Redirect to="/antipoff-group-test"/> : <Redirect to="/antipoff-group-test/signup"/>}
            </Route>
        </Switch>
    </main>);
}

export default App;
