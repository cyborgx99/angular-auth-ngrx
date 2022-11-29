import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  AuthSuccessResponseInterface,
  LoginRequestInterface,
  RegisterRequestInterface,
} from '../types';
import { apiRouteUrl } from 'src/app/shared/constants';
import { CurrentUserInterface } from 'src/app/shared/types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<AuthSuccessResponseInterface> {
    return this.http.post<AuthSuccessResponseInterface>(apiRouteUrl.auth.signUp, data, {
      withCredentials: true,
    });
  }

  login(data: LoginRequestInterface): Observable<AuthSuccessResponseInterface> {
    return this.http.post<AuthSuccessResponseInterface>(apiRouteUrl.auth.login, data, {
      withCredentials: true,
    });
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    return this.http.get<CurrentUserInterface>(apiRouteUrl.auth.currentUser);
  }
}
