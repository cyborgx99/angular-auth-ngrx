import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { CurrentUserInterface } from 'src/app/shared/types';
import { AuthService } from '../../services/auth.service';
import {
  getCurrentUserAction,
  getCurrentUserSuccessAction,
  loginFailureAction,
} from '../actions';

@Injectable()
export class GetCurrentUserEffect {
  constructor(private actions$: Actions, private authService: AuthService) {}

  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        return this.authService.getCurrentUser().pipe(
          map((user: CurrentUserInterface) => {
            return getCurrentUserSuccessAction({ user });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(loginFailureAction(errorResponse.error));
          }),
        );
      }),
    ),
  );
}
