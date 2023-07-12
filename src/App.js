import './App.css';
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getUsersFetch} from "./redux-saga/usersState";
import Main from "./components/Main/Main";
import {Route, Routes} from "react-router-dom";
import AboutUser from "./components/AboutUser/AboutUser";

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersFetch())
    }, [dispatch]);

    return (
        <main className="App">
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="about-user/:id" element={<AboutUser/>}/>
            </Routes>
        </main>
    );
}

export default App;
