import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BackendErrorResponseInterface } from 'src/app/shared/types/backend-errors.interface';
import { routePathKeys } from '../../route-part-keys';
import { registerAction } from '../../store/actions';
import { errorSelector, isSubmittingSelector } from '../../store/auth.selectors';
import { RegisterRequestInterface } from '../../types';

@Component({
  selector: 'nc-register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
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
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    const request: RegisterRequestInterface = {
      ...this.form.value,
    };

    this.store.dispatch(registerAction({ request }));
  }
}
