import { createAction, props } from '@ngrx/store';
import { BackendErrorResponseInterface } from 'src/app/shared/types/backend-errors.interface';
import { AuthSuccessResponseInterface, LoginRequestInterface } from '../../types';
import { AuthActionTypes } from '../auth-action-types';

export const loginAction = createAction(
  AuthActionTypes.LOGIN,
  props<{ request: LoginRequestInterface }>(),
);

export const loginSuccessAction = createAction(
  AuthActionTypes.LOGIN_SUCCESS,
  props<AuthSuccessResponseInterface>(),
);

export const loginFailureAction = createAction(
  AuthActionTypes.LOGIN_FAILURE,
  props<BackendErrorResponseInterface>(),
);
