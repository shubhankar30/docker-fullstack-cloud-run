import * as types from '../types';

export const login = (email, password, onSuccess) => ({
  type: types.LOGIN_REQUEST,
  payload: {
    email,
    password,
  },
  meta: {
    onSuccess,
  },
});

export const logout = onSuccess => ({
  type: types.LOGOUT_REQUEST,
  meta: {
    onSuccess,
  },
});

export const checkUserSession = onCompletion => ({
  type: types.CHECK_USER_SESSION,
  meta: {
    onCompletion,
  },
});