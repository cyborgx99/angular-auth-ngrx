import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { AuthSuccessResponseInterface } from '../../types';
import { registerAction, registerFailureAction, registerSuccessAction } from '../actions';

@Injectable()
export class RegisterEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
  ) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap((data) => {
        return this.authService.register(data.request).pipe(
          map((response: AuthSuccessResponseInterface) => {
            // set local storage
            return registerSuccessAction(response);
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(registerFailureAction(errorResponse.error));
          }),
        );
      }),
    ),
  );

  redirectAfterSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/');
        }),
      ),
    { dispatch: false },
  );
}
