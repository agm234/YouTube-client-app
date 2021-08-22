import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { IUser } from '../models/user-model';

export const AUTH_KEY = 'AUTH';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogin$ = new BehaviorSubject<boolean>(this.islogined());

  username?:string;

  login(user:IUser) {
    if (user) {
      localStorage.setItem(AUTH_KEY, JSON.stringify(Math.random().toString(16)));
      this.isLogin$.next(true);
      this.username = user.username;
      return true;
    }
    localStorage.removeItem(AUTH_KEY);
    return false;
  }

  islogined():boolean {
    const key = localStorage.getItem(AUTH_KEY);
    if (key !== null && key.length > 0) return true;

    return false;
  }

  logout() {
    localStorage.removeItem(AUTH_KEY);
    this.isLogin$.next(false);
  }
}
