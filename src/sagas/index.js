import {call, fork, put, select, take, takeEvery} from 'redux-saga/effects';
import {push} from "react-router-redux";
import {AUTH_REQUEST, CREATE_REQUEST, DELETE_REQUEST, UPDATE_REQUEST} from "../constants/requests";
import * as API from "../api/api";
import {createItem, deleteItem, setItem, setItems, setSearchResults, updateItem} from "../actions/items";
import {addAuthToken} from "../actions/authToken";
import {getAuthToken} from "../selectors/index";

function* errorProcessing(history, error) {
  yield call(history.push, {
    message: error.response.data.message,
    details: error.response.data.details
  });
}

function* runSearchRequest(history, keyword) {
  const authToken = yield select(getAuthToken);
  const {items, error} = yield call(API.fetchSearch, keyword, authToken);
  if (items && !error) {
    yield put(setSearchResults(items));
  } else {
    // yield fork(errorProcessing, history, error);
  }
}

function* runDeleteRequest(history, action) {
  const id = action.payload.id;
  const authToken = yield select(getAuthToken);
  const {error} = yield call(API.fetchDelete, id, authToken);
  if (!error) {
    yield put(deleteItem(Number(id)));
  } else {
    // yield fork(errorProcessing, history, error);
  }
}

function* runUpdateRequest(history, action) {
  const id = action.payload.id;
  const authToken = yield select(getAuthToken);
  const {item, error} = yield call(API.fetchUpdate, id, authToken, action.payload.formItem);
  if (item && !error) {
    yield put(updateItem(Number(id), item));
  } else {
    // yield fork(errorProcessing, history, error);
  }
}

function* runShowRequest(history, id) {
  const authToken = yield select(getAuthToken);
  const {item, error} = yield call(API.fetchShow, id, authToken);
  if (item && !error) {
    yield put(setItem(item));
  } else {
    // yield fork(errorProcessing, history, error);
  }
}

function* runCreateRequest(history, action) {
  const authToken = yield select(getAuthToken);
  const {item, error} = yield call(API.fetchCreate, authToken, action.payload.formItem);
  if (item && !error) {
    yield put(createItem(item));
  } else {
    // yield fork(errorProcessing, history, error);
  }
}

function* runIndexRequest() {
  const authToken = yield select(getAuthToken);
  const {items, error} = yield call(API.fetchIndex, authToken);
  if (items && !error) {
    yield put(setItems(items));
  } else {
    // yield fork(errorProcessing, history, error);
  }
}

function* handleLocationChange(history) {
  while (true) {
    const {payload} = yield take("@@router/LOCATION_CHANGE");
    switch (true) {
      case /^\/items\/?$/.test(payload.pathname):
        yield fork(runIndexRequest, history);
        break;
      case /^\/items\/\d+\/?/.test(payload.pathname):
        const id = payload.pathname.match(/\d+/)[0];
        yield fork(runShowRequest, history, id);
        break;
      case /^\/items\/search\/?$/.test(payload.pathname):
        if (/\?keyword=(.*)/.test(payload.search)) {
          const keyword = decodeURIComponent(payload.search.match(/\?keyword=(.*)/)[1]);
          yield fork(runSearchRequest, history, keyword);
        }
        break;
      default:
        break;
    }
  }
}

function* runAuthRequest(history, action) {
  yield put(addAuthToken(action.payload.authToken));
  yield put(push('/items'));
}

export default function* rootSaga(history) {
  yield put(push('/auth'));
  yield fork(handleLocationChange, history);
  yield takeEvery(AUTH_REQUEST, runAuthRequest, history);
  yield takeEvery(CREATE_REQUEST, runCreateRequest, history);
  yield takeEvery(UPDATE_REQUEST, runUpdateRequest, history);
  yield takeEvery(DELETE_REQUEST, runDeleteRequest, history);
}
