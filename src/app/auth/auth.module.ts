import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BackendErrorMessageModule } from '../shared/modules/backendErrorMessage/backend-error-message.module';
import { LocalStorageService } from '../shared/service/local-storage.service';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { routePathKeys } from './route-part-keys';
import { AuthService } from './services/auth.service';
import { reducers } from './store/auth.reducer';
import { RegisterEffect, LoginEffect, GetCurrentUserEffect } from './store/effects';

const routes: Route[] = [
  {
    path: routePathKeys.register,
    component: RegisterComponent,
  },
  {
    path: routePathKeys.login,
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect, LoginEffect, GetCurrentUserEffect]),
    HttpClientModule,
    BackendErrorMessageModule,
  ],
  providers: [AuthService, LocalStorageService],
})
export class AuthModule {}
