import {call, fork, put, select, take, takeEvery} from 'redux-saga/effects';
import {push} from "react-router-redux";
import {AUTHENTICATION_REQUEST, CREATE_REQUEST, DELETE_REQUEST, UPDATE_REQUEST} from "../constants/requests";
import * as API from "../api/api";
import {createItem, deleteItem, setItems, updateItem} from "../actions";
import {addAuthToken} from "../actions/authToken";
import {getAuthToken} from "../selectors/index";

function* runDeleteRequest(action) {
  try {
    const authToken = yield select(getAuthToken);
    const {id} = yield call(API.fetchDelete, action.payload.id, authToken);
    yield put(push('/items'));
    yield put(deleteItem(id));
  } catch (e) {

  }
}

function* runUpdateRequest(action) {
  try {
    const authToken = yield select(getAuthToken);
    const {id, data} = yield call(API.fetchUpdate, action.payload.id, authToken, action.payload.formItem);
    yield put(updateItem(id, data));
    yield put(push('/items'));
  } catch (e) {

  }
}

function* runCreateRequest(action) {
  try {
    const authToken = yield select(getAuthToken);
    const {data} = yield call(API.fetchCreate, authToken, action.payload.formItem);
    yield put(createItem(data));
    yield put(push('/items'));
  } catch (e) {

  }
}

function* handleDeleteRequest() {
  yield takeEvery(DELETE_REQUEST, runDeleteRequest);
}

function* handleUpdateRequest() {
  yield takeEvery(UPDATE_REQUEST, runUpdateRequest);
}

function* handleCreateRequest() {
  yield takeEvery(CREATE_REQUEST, runCreateRequest);
}

function* runSecondAuthenticationRequest(action) {
  try {
    const authToken = action.payload.authToken;
    const {data} = yield call(API.fetchIndex, authToken);
    yield put(setItems(data));
    yield put(addAuthToken(authToken));
    yield put(push('/items'));
  } catch (e) {

  }
}

function* runFirstAuthenticationRequest(action) {
  try {
    const authToken = action.payload.authToken;
    const {data} = yield call(API.fetchIndex, authToken);
    yield put(setItems(data));
    yield put(addAuthToken(authToken));
    yield put(push('/items'));
    yield takeEvery(AUTHENTICATION_REQUEST, runSecondAuthenticationRequest);
    yield fork(handleCreateRequest);
    yield fork(handleUpdateRequest);
    yield fork(handleDeleteRequest);
  } catch (e) {

  }
}

function* handleAuthenticationRequest() {
  const action = yield take(AUTHENTICATION_REQUEST);
  yield fork(runFirstAuthenticationRequest, action);
}

function* startup() {
  yield put(push('/auth'));
  yield fork(handleAuthenticationRequest);
}

export default function* rootSaga() {
  yield fork(startup);
}
