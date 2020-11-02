import { takeEvery, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import firebase, { onAuthStateChanged } from '../../firebase';

import * as types from '../types';

function* login(action) {
  try {
    const auth = firebase.auth();
    yield call(
      [auth, auth.signInWithEmailAndPassword],
      action.payload.email,
      action.payload.password,
    );

    yield put({
      type: types.LOGIN_SUCCESS,
    });

    yield call(toast.warn, 'Logged in admin');
    if (action.meta.onSuccess) {
      yield call(action.meta.onSuccess);
    }
  } catch (err) {
    console.log('error');
    console.log(err);
    yield put({
      type: types.LOGIN_FAILURE,
    });
    yield call(toast.error, err.message);
  }
}

function* logout(action) {
  try {
    const auth = firebase.auth();
    yield call(
      [auth, auth.signOut],
    );
    yield put({
      type: types.LOGOUT_SUCCESS,
    });
    yield call(toast.warn, 'Logged out successfully');
    if (action.meta.onSuccess) {
      yield call(action.meta.onSuccess);
    }
  } catch (err) {
    console.log('error');
    console.log(err);
    yield put({
      type: types.LOGOUT_FAILURE,
    });
    yield call(toast.error, err.message);
  }
}

function* recover(action) {
  try {
    yield call(onAuthStateChanged);
    yield put({
      type: types.LOGIN_SUCCESS,
    });
    if (action.meta.onCompletion) {
      yield call(action.meta.onCompletion);
    }

    yield call(toast.info, 'Logged in');
  } catch (err) {
    console.log('error');
    console.log(err);
    yield put({
      type: types.LOGIN_FAILURE,
    });
    if (action.meta.onCompletion) {
      yield call(action.meta.onCompletion);
    }
    // yield call(toast.error, err.message);
  }
}

export default function* () {
  yield takeEvery(types.LOGIN_REQUEST, login);
  yield takeEvery(types.LOGOUT_REQUEST, logout);
  yield takeEvery(types.CHECK_USER_SESSION, recover);
}
