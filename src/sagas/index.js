import {call, fork, put, select, takeEvery} from 'redux-saga/effects';
import {push} from "react-router-redux";
import {
  AUTHENTICATION_REQUEST,
  CREATE_REQUEST,
  DELETE_REQUEST,
  INDEX_REQUEST,
  SEARCH_REQUEST,
  SHOW_REQUEST,
  UPDATE_REQUEST
} from "../constants/requests";
import * as API from "../api/api";
import {createItem, deleteItem, setItem, setItems, updateItem} from "../actions";
import {addAuthToken} from "../actions/authToken";
import {getAuthToken} from "../selectors/index";

function* runSearchRequest(action) {
  try {
    const keyword = action.payload.keyword;
    const authToken = yield select(getAuthToken);
    const {data} = yield call(API.fetchSearch, keyword, authToken);
    yield put(setItems(data));
    yield put(push(`/items/search?keyword=${keyword}`));
  } catch (e) {

  }
}

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

function* runShowRequest(action) {
  try {
    const id = action.payload.id;
    const authToken = yield select(getAuthToken);
    const {data} = yield call(API.fetchShow, id, authToken);
    yield put(setItem(data));
    yield put(push(`/items/${id}`));
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

function* runIndexRequest() {
  try {
    const authToken = yield select(getAuthToken);
    const {data} = yield call(API.fetchIndex, authToken);
    yield put(setItems(data));
    yield put(push('/items'));
  } catch (e) {

  }
}

function* runAuthenticationRequest(action) {
  yield put(addAuthToken(action.payload.authToken));
  yield fork(runIndexRequest);
}

function* handleSearchRequest() {
  yield takeEvery(SEARCH_REQUEST, runSearchRequest);
}

function* handleDeleteRequest() {
  yield takeEvery(DELETE_REQUEST, runDeleteRequest);
}

function* handleUpdateRequest() {
  yield takeEvery(UPDATE_REQUEST, runUpdateRequest);
}

function* handleShowRequest() {
  yield takeEvery(SHOW_REQUEST, runShowRequest)
}

function* handleCreateRequest() {
  yield takeEvery(CREATE_REQUEST, runCreateRequest);
}

function* handleIndexRequest() {
  yield takeEvery(INDEX_REQUEST, runIndexRequest);
}

function* handleAuthenticationRequest() {
  yield takeEvery(AUTHENTICATION_REQUEST, runAuthenticationRequest);
}

export default function* rootSaga() {
  yield put(push('/auth'));
  yield fork(handleAuthenticationRequest);
  yield fork(handleIndexRequest);
  yield fork(handleCreateRequest);
  yield fork(handleShowRequest);
  yield fork(handleUpdateRequest);
  yield fork(handleDeleteRequest);
  yield fork(handleSearchRequest);
}
