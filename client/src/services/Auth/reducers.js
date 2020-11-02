import * as types from '../types';

export const DEFAULT_STATE = {
  isLoading: false,
  isAuthenticated: false,
};

export default (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case types.LOGIN_REQUEST: return {
      ...state,
      isLoading: true,
      isAuthenticated: false,
    };
    case types.LOGIN_SUCCESS: return {
      ...state,
      isLoading: false,
      isAuthenticated: true,
    };
    case types.LOGIN_FAILURE: return {
      ...state,
      isLoading: false,
      isAuthenticated: false,
    };
    case types.LOGOUT_REQUEST: return {
      ...state,
      isLoading: true,
      isAuthenticated: false,
    };
    case types.LOGOUT_SUCCESS: return {
      ...state,
      isLoading: false,
    };
    case types.LOGOUT_FAILURE: return {
      ...state,
      isLoading: false,
    };
    case types.CHECK_USER_SESSION: return {
      ...state,
      isLoading: true,
      isAuthenticated: false,
    };
    default: return state;
  }
};
