import { Action, createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from '../types';
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
  loginAction,
  loginFailureAction,
  loginSuccessAction,
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from './actions';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
  authToken: null,
  error: null,
  currentUser: null,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      error: null,
    }),
  ),
  on(
    registerSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      authToken: action.accessToken,
    }),
  ),
  on(
    registerFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      error: action,
    }),
  ),
  on(
    loginAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      error: null,
    }),
  ),
  on(
    loginSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      authToken: action.accessToken,
    }),
  ),
  on(
    loginFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      error: action,
    }),
  ),
  on(
    getCurrentUserAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isLoading: true,
      error: null,
    }),
  ),
  on(
    getCurrentUserSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isLoading: false,
      currentUser: action.user,
    }),
  ),
  on(
    getCurrentUserFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isLoading: false,
      error: action,
    }),
  ),
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
