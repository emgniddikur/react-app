import {call, fork, put, select, take, takeEvery} from 'redux-saga/effects';
import {push} from "react-router-redux";
import {
  REQUEST_AUTHENTICATION,
  REQUEST_TO_CREATE_ITEM,
  REQUEST_TO_DELETE_ITEM,
  REQUEST_TO_GET_ALL_ITEMS,
  REQUEST_TO_GET_ITEM,
  REQUEST_TO_SEARCH_ITEMS,
  REQUEST_TO_UPDATE_ITEM
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
import {getAuthToken, getItems} from "../selectors/index";
import {requestToGetAllItems, requestToGetOneItem, requestToSearchItems} from "../actions/requests";
import {initialItemState} from "../reducers/initialItemState";

function* errorProcessing(history, error) {
  yield call(history.push, {
    message: error.response.data.message,
    details: error.response.data.details
  });
}

function* runRequestToSearchItems(history, action) {
  const keyword = action.payload.keyword;
  const authToken = yield select(getAuthToken);
  const {items, error} = yield call(API.fetchSearch, keyword, authToken);
  if (items && !error) {
    yield put(setSearchResults(items));
  } else {
    // yield fork(errorProcessing, history, error);
  }
}

function* runRequestToDeleteItem(history, action) {
  const id = action.payload.id;
  const authToken = yield select(getAuthToken);
  const {error} = yield call(API.fetchDelete, id, authToken);
  if (!error) {
    yield put(deleteItem(Number(id)));
    yield put(push('/items'));
  } else {
    // yield fork(errorProcessing, history, error);
  }
}

function* runRequestToUpdateItem(history, action) {
  const id = action.payload.id;
  const authToken = yield select(getAuthToken);
  const {item, error} = yield call(API.fetchUpdate, id, authToken, action.payload.formItem);
  if (item && !error) {
    yield put(updateItem(Number(id), item));
    yield put(push('/items'));
  } else {
    // yield fork(errorProcessing, history, error);
  }
}

function* runRequestToGetItem(history, action) {
  const id = action.payload.id;
  const authToken = yield select(getAuthToken);
  const {item, error} = yield call(API.fetchShow, id, authToken);
  if (item && !error) {
    yield put(setItem(item));
  } else {
    // yield fork(errorProcessing, history, error);
  }
}

function* runRequestToCreateItem(history, action) {
  const authToken = yield select(getAuthToken);
  const {item, error} = yield call(API.fetchCreate, authToken, action.payload.formItem);
  if (item && !error) {
    yield put(createItem(item));
    yield put(push('/items'));
  } else {
    // yield fork(errorProcessing, history, error);
  }
}

function* runRequestToGetAllItems(history) {
  const authToken = yield select(getAuthToken);
  const {items, error} = yield call(API.fetchIndex, authToken);
  if (items && !error) {
    yield put(setItems(items));
  } else {
    // yield fork(errorProcessing, history, error);
  }
}

function* runRequestAuthentication(history, action) {
  yield put(addAuthToken(action.payload.authToken));
  yield put(push('/items'));
}

function* handleLocationChange() {
  while (true) {
    const {payload} = yield take('@@router/LOCATION_CHANGE');
    switch (true) {
      case /^\/items\/?$/.test(payload.pathname):
        yield put(requestToGetAllItems());
        break;
      case /^\/items\/new\/?$/.test(payload.pathname):
        yield put(inputItem(initialItemState.formItem));
        break;
      case /^\/items\/search\/?$/.test(payload.pathname):
        if (/\?keyword=.*/.test(payload.search)) {
          const keyword = decodeURIComponent(payload.search.match(/\?keyword=(.*)/)[1]);
          yield put(requestToSearchItems(keyword));
        } else {
          yield put(inputKeyword(initialItemState.keyword));
          yield put(setSearchResults(initialItemState.searchResults));
        }
        break;
      case /^\/items\/\d+\/?$/.test(payload.pathname):
        let id = payload.pathname.match(/\d+/)[0];
        yield put(requestToGetOneItem(id));
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

export default function* rootSaga(history) {
  yield put(push('/auth'));
  yield fork(handleLocationChange, history);
  yield takeEvery(REQUEST_AUTHENTICATION, runRequestAuthentication, history);
  yield takeEvery(REQUEST_TO_GET_ALL_ITEMS, runRequestToGetAllItems, history);
  yield takeEvery(REQUEST_TO_CREATE_ITEM, runRequestToCreateItem, history);
  yield takeEvery(REQUEST_TO_GET_ITEM, runRequestToGetItem, history);
  yield takeEvery(REQUEST_TO_UPDATE_ITEM, runRequestToUpdateItem, history);
  yield takeEvery(REQUEST_TO_DELETE_ITEM, runRequestToDeleteItem, history);
  yield takeEvery(REQUEST_TO_SEARCH_ITEMS, runRequestToSearchItems, history);
}
