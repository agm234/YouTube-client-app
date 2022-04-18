import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { IUser } from '../models/user-model';

export const AUTH_KEY = 'AUTH';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogin$ = new BehaviorSubject<boolean>(this.isLogined());

  username$ = new BehaviorSubject<string>('Your Name');

  loginNavigate = '/login';

  login(user:IUser) {
    if (user) {
      localStorage.setItem(AUTH_KEY, JSON.stringify(Math.random().toString(16)));
      this.isLogin$.next(true);
      this.username$.next(user.username);
    } else {
      localStorage.removeItem(AUTH_KEY);
    }
  }

  isLogined():boolean {
    const key = localStorage.getItem(AUTH_KEY);
    return key !== null && key.length > 0;
  }

  logout() {
    this.username$.next('Your Name');
    localStorage.removeItem(AUTH_KEY);
    this.isLogin$.next(false);
  }
}
