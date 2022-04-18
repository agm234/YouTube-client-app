import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthLoadGuard implements CanLoad {
  login = this.auth.loginNavigate;

  constructor(private router:Router, private auth:AuthService) {
  }

  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    const isAuth = this.auth.isLogined();
    if (isAuth) {
      return true;
    }

    this.router.navigate([this.login]);
    return false;
  }
}
