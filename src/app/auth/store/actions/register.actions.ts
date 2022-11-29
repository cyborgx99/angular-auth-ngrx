import { createAction, props } from '@ngrx/store';
import { BackendErrorResponseInterface } from 'src/app/shared/types/backend-errors.interface';
import { AuthSuccessResponseInterface } from '../../types';
import { RegisterRequestInterface } from '../../types/register-request.interface';
import { AuthActionTypes } from '../auth-action-types';

export const registerAction = createAction(
  AuthActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>(),
);

export const registerSuccessAction = createAction(
  AuthActionTypes.REGISTER_SUCCESS,
  props<AuthSuccessResponseInterface>(),
);

export const registerFailureAction = createAction(
  AuthActionTypes.REGISTER_FAILURE,
  props<BackendErrorResponseInterface>(),
);
