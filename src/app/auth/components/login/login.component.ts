import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BackendErrorResponseInterface } from 'src/app/shared/types/backend-errors.interface';
import { routePathKeys } from '../../route-part-keys';
import { loginAction } from '../../store/actions';
import { errorSelector, isSubmittingSelector } from '../../store/auth.selectors';
import { LoginRequestInterface } from '../../types';

@Component({
  selector: 'nc-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorResponseInterface | null>;
  routePathKeys = routePathKeys;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(errorSelector));
  }

  initializeForm(): void {
    this.form = this.fb.group({
      email: [
        '',
        {
          validators: [Validators.required, Validators.email],
        },
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    const request: LoginRequestInterface = {
      ...this.form.value,
    };

    this.store.dispatch(loginAction({ request }));
  }
}
