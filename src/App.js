import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUsersFetch} from "./redux-saga/usersState";
import Main from "./components/Main/Main";
import {Route, Routes} from "react-router-dom";

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersFetch())
    }, [dispatch]);

    return (
        <main className="App">
            <Routes>
                <Route path="/" element={<Main/>}/>
            </Routes>
        </main>
    );
}

export default App;
