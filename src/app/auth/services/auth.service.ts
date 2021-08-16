import { Injectable } from '@angular/core';

import { IUser } from '../models/user-model';

export const AUTH_KEY = 'AUTH';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(user:IUser) :boolean {
    if (user) {
      localStorage.setItem(AUTH_KEY, JSON.stringify(true));
      return true;
    }
    localStorage.removeItem(AUTH_KEY);
    return false;
  }

  Islogined():boolean {
    const key = localStorage.getItem(AUTH_KEY);
    return Boolean(key);
  }
}
