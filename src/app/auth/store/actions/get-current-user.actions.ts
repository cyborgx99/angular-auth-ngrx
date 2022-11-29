import { createAction, props } from '@ngrx/store';
import { CurrentUserInterface } from 'src/app/shared/types';
import { BackendErrorResponseInterface } from 'src/app/shared/types/backend-errors.interface';
import { AuthActionTypes } from '../auth-action-types';

export const getCurrentUserAction = createAction(AuthActionTypes.GET_CURRENT_USER);

export const getCurrentUserSuccessAction = createAction(
  AuthActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{ user: CurrentUserInterface }>(),
);

export const getCurrentUserFailureAction = createAction(
  AuthActionTypes.GET_CURRENT_USER_FAILURE,
  props<BackendErrorResponseInterface>(),
);
