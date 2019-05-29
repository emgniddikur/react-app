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

function* errorProcessing(history, error) {
  yield call(history.push, {
    message: error.response.data.message,
    details: error.response.data.details
  });
}

function* runSearchRequest(history, action) {
  const keyword = action.payload.keyword;
  const authToken = yield select(getAuthToken);
  const {data, error} = yield call(API.fetchSearch, keyword, authToken);
  if (data && !error) {
    yield put(setItems(data));
    yield put(push(`/items/search?keyword=${keyword}`));
  } else {
    yield fork(errorProcessing, history, error);
  }
}

function* runDeleteRequest(history, action) {
  const authToken = yield select(getAuthToken);
  const {id, error} = yield call(API.fetchDelete, action.payload.id, authToken);
  if (!error) {
    yield put(push('/items'));
    yield put(deleteItem(id));
  } else {
    yield fork(errorProcessing, history, error);
  }
}

function* runUpdateRequest(history, action) {
  const authToken = yield select(getAuthToken);
  const {id, data, error} = yield call(API.fetchUpdate, action.payload.id, authToken, action.payload.formItem);
  if (data && !error) {
    yield put(updateItem(id, data));
    yield put(push('/items'));
  } else {
    yield fork(errorProcessing, history, error);
  }
}

function* runShowRequest(history, action) {
  const id = action.payload.id;
  const authToken = yield select(getAuthToken);
  const {data, error} = yield call(API.fetchShow, id, authToken);
  if (data && !error) {
    yield put(setItem(data));
    yield put(push(`/items/${id}`));
  } else {
    yield fork(errorProcessing, history, error);
  }
}

function* runCreateRequest(history, action) {
  const authToken = yield select(getAuthToken);
  const {data, error} = yield call(API.fetchCreate, authToken, action.payload.formItem);
  if (data && !error) {
    yield put(createItem(data));
    yield put(push('/items'));
  } else {
    yield fork(errorProcessing, history, error);
  }
}

function* runIndexRequest(history) {
  const authToken = yield select(getAuthToken);
  const {data, error} = yield call(API.fetchIndex, authToken);
  if (data && !error) {
    yield put(setItems(data));
    yield put(push('/items'));
  } else {
    yield fork(errorProcessing, history, error);
  }
}

function* runAuthenticationRequest(history, action) {
  yield put(addAuthToken(action.payload.authToken));
  yield fork(runIndexRequest, history);
}

function* handleSearchRequest(history) {
  yield takeEvery(SEARCH_REQUEST, runSearchRequest, history);
}

function* handleDeleteRequest(history) {
  yield takeEvery(DELETE_REQUEST, runDeleteRequest, history);
}

function* handleUpdateRequest(history) {
  yield takeEvery(UPDATE_REQUEST, runUpdateRequest, history);
}

function* handleShowRequest(history) {
  yield takeEvery(SHOW_REQUEST, runShowRequest, history)
}

function* handleCreateRequest(history) {
  yield takeEvery(CREATE_REQUEST, runCreateRequest, history);
}

function* handleIndexRequest(history) {
  yield takeEvery(INDEX_REQUEST, runIndexRequest, history);
}

function* handleAuthenticationRequest(history) {
  yield takeEvery(AUTHENTICATION_REQUEST, runAuthenticationRequest, history);
}

export default function* rootSaga(history) {
  yield put(push('/auth'));
  yield fork(handleAuthenticationRequest, history);
  yield fork(handleIndexRequest, history);
  yield fork(handleCreateRequest, history);
  yield fork(handleShowRequest, history);
  yield fork(handleUpdateRequest, history);
  yield fork(handleDeleteRequest, history);
  yield fork(handleSearchRequest, history);
}
