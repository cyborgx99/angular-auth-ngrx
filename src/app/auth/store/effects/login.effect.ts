import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { AuthSuccessResponseInterface } from '../../types';
import { loginAction, loginFailureAction, loginSuccessAction } from '../actions';

@Injectable()
export class LoginEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap((data) => {
        return this.authService.login(data.request).pipe(
          map((response: AuthSuccessResponseInterface) => {
            // set local storage
            return loginSuccessAction(response);
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(loginFailureAction(errorResponse.error));
          }),
        );
      }),
    ),
  );

  redirectAfterSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/');
        }),
      ),
    { dispatch: false },
  );
}
