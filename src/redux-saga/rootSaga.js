import {call, put, takeEvery, delay} from "redux-saga/effects";
import {getUsersSuccess, getUsersFailure} from "./usersState";
import axios from "axios";

function* workGetUsersFetch() {
    try {
        const usersPageOne = yield call(() => axios.get("https://reqres.in/api/users?page=1"));
        const usersPageTwo = yield call(() => axios.get("https://reqres.in/api/users?page=2"));
        const users = usersPageOne.data.data.concat(usersPageTwo.data.data);
        yield put(getUsersSuccess(users));
    } catch (e) {
        yield put(getUsersFailure("Error, can not load data from server"));
    }


}

function* rootSaga() {
    yield takeEvery("users/getUsersFetch", workGetUsersFetch)
}

export default rootSaga;