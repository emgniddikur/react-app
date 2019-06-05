import {call, fork, put, select, take, takeEvery} from 'redux-saga/effects';
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
import {
  createItem,
  deleteItem,
  inputItem,
  inputKeyword,
  setItem,
  setItems,
  setSearchResults,
  updateItem
} from "../actions/items";
import {addAuthToken} from "../actions/authToken";
import {getAuthToken, getItems, getMessage} from "../selectors/index";
import {indexRequest, searchRequest, showRequest} from "../actions/requests";
import {initialItemState} from "../reducers/initialItemState";
import {fetchFailure, resetErrorMessage} from "../actions/errors";

function* runSearchRequest(action) {
  const keyword = action.payload.keyword;
  const authToken = yield select(getAuthToken);
  const {items, error} = yield call(API.fetchSearch, keyword, authToken);
  if (items && !error) {
    yield put(setSearchResults(items));
  } else {
    yield put(fetchFailure(error));
  }
}

function* runDeleteRequest(action) {
  const id = action.payload.id;
  const authToken = yield select(getAuthToken);
  const {error} = yield call(API.fetchDelete, id, authToken);
  if (!error) {
    yield put(push('/items'));
    yield put(deleteItem(id));
  } else {
    yield put(fetchFailure(error));
  }
}

function* runUpdateRequest(action) {
  const id = action.payload.id;
  const authToken = yield select(getAuthToken);
  const {item, error} = yield call(API.fetchUpdate, id, authToken, action.payload.formItem);
  if (item && !error) {
    yield put(updateItem(id, item));
    yield put(push('/items'));
  } else {
    yield put(fetchFailure(error));
  }
}

function* runShowRequest(action) {
  const id = action.payload.id;
  const authToken = yield select(getAuthToken);
  const {item, error} = yield call(API.fetchShow, id, authToken);
  if (item && !error) {
    yield put(setItem(item));
  } else {
    yield put(fetchFailure(error));
  }
}

function* runCreateRequest(action) {
  const authToken = yield select(getAuthToken);
  const {item, error} = yield call(API.fetchCreate, authToken, action.payload.formItem);
  if (item && !error) {
    yield put(createItem(item));
    yield put(push('/items'));
  } else {
    yield put(fetchFailure(error));
  }
}

function* runIndexRequest() {
  const authToken = yield select(getAuthToken);
  const {items, error} = yield call(API.fetchIndex, authToken);
  if (items && !error) {
    yield put(setItems(items));
  } else {
    yield put(fetchFailure(error));
  }
}

function* runAuthRequest(action) {
  yield put(addAuthToken(action.payload.authToken));
  yield put(push('/items'));
}

function* handleLocationChange() {
  while (true) {
    const {payload} = yield take('@@router/LOCATION_CHANGE');
    const message = yield select(getMessage);
    if (message) {
      yield put(resetErrorMessage());
    }
    switch (true) {
      case /^\/items\/?$/.test(payload.pathname):
        yield put(indexRequest());
        break;
      case /^\/items\/new\/?$/.test(payload.pathname):
        yield put(inputItem(initialItemState.formItem));
        break;
      case /^\/items\/search\/?$/.test(payload.pathname):
        if (/\?keyword=.*/.test(payload.search)) {
          const keyword = decodeURIComponent(payload.search.match(/\?keyword=(.*)/)[1]);
          yield put(searchRequest(keyword));
        } else {
          yield put(inputKeyword(initialItemState.keyword));
          yield put(setSearchResults(initialItemState.searchResults));
        }
        break;
      case /^\/items\/\d+\/?$/.test(payload.pathname):
        let id = payload.pathname.match(/\d+/)[0];
        yield put(showRequest(id));
        break;
      case /^\/items\/\d+\/edit\/?$/.test(payload.pathname):
        const items = yield select(getItems);
        id = payload.pathname.match(/\d+/)[0];
        const item = items.filter(e => e.id === Number(id))[0];
        yield put(inputItem(item));
        break;
      default:
        break;
    }
  }
}

export default function* rootSaga() {
  yield put(push('/auth'));
  yield fork(handleLocationChange);
  yield takeEvery(AUTH_REQUEST, runAuthRequest);
  yield takeEvery(INDEX_REQUEST, runIndexRequest);
  yield takeEvery(CREATE_REQUEST, runCreateRequest);
  yield takeEvery(SHOW_REQUEST, runShowRequest);
  yield takeEvery(UPDATE_REQUEST, runUpdateRequest);
  yield takeEvery(DELETE_REQUEST, runDeleteRequest);
  yield takeEvery(SEARCH_REQUEST, runSearchRequest);
}
