import { Action, createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from '../types';
import { registerAction } from './auth.actions';

const initialState: AuthStateInterface = {
  isSubmitting: false,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
    }),
  ),
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
