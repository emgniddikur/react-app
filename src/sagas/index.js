import {call, fork, put, select, takeEvery} from 'redux-saga/effects';
import {push} from "react-router-redux";
import {
  AUTH_REQUEST,
  CREATE_REQUEST,
  DELETE_REQUEST,
  INDEX_REQUEST,
  SEARCH_REQUEST,
  SHOW_REQUEST,
  UPDATE_REQUEST
} from "../constants/requests";
import * as API from "../api/api";
import {createItem, deleteItem, setItem, setItems, updateItem} from "../actions/items";
import {addAuthToken} from "../actions/authToken";
import {getAuthToken} from "../selectors/index";

function* errorProcessing(history, error) {
  yield call(history.push, {
    message: error.response.data.message,
    details: error.response.data.details
  });
}

function* runSearchRequest(history, action) {
  const keyword = action.payload.keyword;
  const authToken = yield select(getAuthToken);
  const {items, error} = yield call(API.fetchSearch, keyword, authToken);
  if (items && !error) {
    yield put(setItems(items));
    yield put(push(`/items/search?keyword=${keyword}`));
  } else {
    yield fork(errorProcessing, history, error);
  }
}

function* runDeleteRequest(history, action) {
  const id = action.payload.id;
  const authToken = yield select(getAuthToken);
  const {error} = yield call(API.fetchDelete, id, authToken);
  if (!error) {
    yield put(push('/items'));
    yield put(deleteItem(Number(id)));
  } else {
    yield fork(errorProcessing, history, error);
  }
}

function* runUpdateRequest(history, action) {
  const id = action.payload.id;
  const authToken = yield select(getAuthToken);
  const {item, error} = yield call(API.fetchUpdate, id, authToken, action.payload.formItem);
  if (item && !error) {
    yield put(updateItem(Number(id), item));
    yield put(push('/items'));
  } else {
    yield fork(errorProcessing, history, error);
  }
}

function* runShowRequest(history, action) {
  const id = action.payload.id;
  const authToken = yield select(getAuthToken);
  const {item, error} = yield call(API.fetchShow, id, authToken);
  if (item && !error) {
    yield put(setItem(item));
    yield put(push(`/items/${id}`));
  } else {
    yield fork(errorProcessing, history, error);
  }
}

function* runCreateRequest(history, action) {
  const authToken = yield select(getAuthToken);
  const {item, error} = yield call(API.fetchCreate, authToken, action.payload.formItem);
  if (item && !error) {
    yield put(createItem(item));
    yield put(push('/items'));
  } else {
    yield fork(errorProcessing, history, error);
  }
}

function* runIndexRequest(history) {
  const authToken = yield select(getAuthToken);
  const {items, error} = yield call(API.fetchIndex, authToken);
  if (items && !error) {
    yield put(setItems(items));
    yield put(push('/items'));
  } else {
    yield fork(errorProcessing, history, error);
  }
}

function* runAuthRequest(history, action) {
  yield put(addAuthToken(action.payload.authToken));
  yield fork(runIndexRequest, history);
}

export default function* rootSaga(history) {
  yield put(push('/auth'));
  yield takeEvery(AUTH_REQUEST, runAuthRequest, history);
  yield takeEvery(INDEX_REQUEST, runIndexRequest, history);
  yield takeEvery(CREATE_REQUEST, runCreateRequest, history);
  yield takeEvery(SHOW_REQUEST, runShowRequest, history);
  yield takeEvery(UPDATE_REQUEST, runUpdateRequest, history);
  yield takeEvery(DELETE_REQUEST, runDeleteRequest, history);
  yield takeEvery(SEARCH_REQUEST, runSearchRequest, history);
}
