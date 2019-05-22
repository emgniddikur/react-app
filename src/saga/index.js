import {call, fork, put, take} from 'redux-saga/effects';
import {createItem, deleteItem, setItems, updateItem} from "../actions";
import * as API from "../api/api";
import {CREATE_REQUEST, DELETE_REQUEST, UPDATE_REQUEST} from "../constants/requests";

function* handleCreateRequest() {
  try {
    const action = yield take(CREATE_REQUEST);
    const {result, error} = yield call(API.fetchCreate, action.payload.formItem);
    yield put(createItem(result));
  } catch (e) {

  }
}

function* handleUpdateRequest() {
  try {
    const action = yield take(UPDATE_REQUEST);
    const {id, result, error} = yield call(API.fetchUpdate, action.payload.id, action.payload.formItem);
    yield put(updateItem(id, result))
  } catch (e) {

  }
}

function* handleDeleteRequest() {
  try {
    const action = yield take(DELETE_REQUEST);
    const {id, error} = yield call(API.fetchDelete, action.payload.id);
    yield put(deleteItem(id));
  } catch (e) {

  }
}

function* startUp() {
  const {result} = yield call(API.fetchIndex);
  yield put(setItems(result));
}

export default function* rootSaga() {
  yield fork(startUp);
  yield fork(handleCreateRequest);
  yield fork(handleUpdateRequest);
  yield fork(handleDeleteRequest);
}
