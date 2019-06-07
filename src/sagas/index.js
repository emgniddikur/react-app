import {call, put, select, takeEvery} from 'redux-saga/effects';
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
import {login, logout} from "../actions/login";

function* errorProcessing(error) {
  const status = error.response.status;
  if (status === 403) {
    yield put(logout());
    yield put(push('/auth'));
  } else if (status === 404 || status === 500) {
    yield put(push('/error'));
  }
  yield put(fetchFailure(error));
}

function* runSearchRequest(action) {
  const keyword = action.payload.keyword;
  const authToken = yield select(getAuthToken);
  const {items, error} = yield call(API.fetchSearch, keyword, authToken);
  if (items && !error) {
    yield put(setSearchResults(items));
  } else {
    yield errorProcessing(error);
  }
}

function* runDeleteRequest(action) {
  const id = action.payload.id;
  const authToken = yield select(getAuthToken);
  const {error} = yield call(API.fetchDelete, id, authToken);
  if (!error) {
    yield put(deleteItem(id));
    yield put(push('/items'));
  } else {
    yield errorProcessing(error);
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
    yield errorProcessing(error);
  }
}

function* runShowRequest(action) {
  const id = action.payload.id;
  const authToken = yield select(getAuthToken);
  const {item, error} = yield call(API.fetchShow, id, authToken);
  if (item && !error) {
    yield put(setItem(item));
  } else {
    yield errorProcessing(error);
  }
}

function* runCreateRequest(action) {
  const authToken = yield select(getAuthToken);
  const {item, error} = yield call(API.fetchCreate, authToken, action.payload.formItem);
  if (item && !error) {
    yield put(createItem(item));
    yield put(push('/items'));
  } else {
    yield errorProcessing(error);
  }
}

function* runIndexRequest() {
  const authToken = yield select(getAuthToken);
  const {items, error} = yield call(API.fetchIndex, authToken);
  if (items && !error) {
    yield put(setItems(items));
  } else {
    yield errorProcessing(error);
  }
}

function* runAuthRequest(action) {
  const authToken = action.payload.authToken;
  const {error} = yield call(API.fetchIndex, authToken);
  if (!error) {
    yield put(login());
    yield put(addAuthToken(authToken));
    yield put(push('/items'));
  } else {
    yield errorProcessing(error);
  }
}

function* runLocationChange(action) {
  const message = yield select(getMessage);
  if (message) {
    yield put(resetErrorMessage());
  }
  switch (true) {
    case /^\/items\/?$/.test(action.payload.pathname):
      yield put(indexRequest());
      break;
    case /^\/items\/new\/?$/.test(action.payload.pathname):
      yield put(inputItem(initialItemState.formItem));
      break;
    case /^\/items\/search\/?$/.test(action.payload.pathname):
      if (/\?keyword=.*/.test(action.payload.search)) {
        const keyword = decodeURIComponent(action.payload.search.match(/\?keyword=(.*)/)[1]);
        yield put(searchRequest(keyword));
      } else {
        yield put(inputKeyword(initialItemState.keyword));
        yield put(setSearchResults(initialItemState.searchResults));
      }
      break;
    case /^\/items\/\d+\/?$/.test(action.payload.pathname): {
      const id = action.payload.pathname.match(/^\/items\/(\d+)\/?$/)[1];
      yield put(showRequest(id));
      break;
    }
    case /^\/items\/\d+\/edit\/?$/.test(action.payload.pathname): {
      const items = yield select(getItems);
      const id = action.payload.pathname.match(/^\/items\/(\d+)\/edit\/?$/)[1];
      const item = items.find(e => e.id === Number(id));
      yield put(inputItem(item));
      break;
    }
    default:
      break;
  }
}

export default function* rootSaga() {
  yield put(push('/auth'));
  yield takeEvery('@@router/LOCATION_CHANGE', runLocationChange);
  yield takeEvery(AUTH_REQUEST, runAuthRequest);
  yield takeEvery(INDEX_REQUEST, runIndexRequest);
  yield takeEvery(CREATE_REQUEST, runCreateRequest);
  yield takeEvery(SHOW_REQUEST, runShowRequest);
  yield takeEvery(UPDATE_REQUEST, runUpdateRequest);
  yield takeEvery(DELETE_REQUEST, runDeleteRequest);
  yield takeEvery(SEARCH_REQUEST, runSearchRequest);
}
