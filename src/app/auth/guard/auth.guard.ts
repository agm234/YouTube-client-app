import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  login = this.auth.loginNavigate;

  constructor(private router:Router, private auth:AuthService) {

  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAuth = this.auth.isLogined();
    if (isAuth) {
      return true;
    }

    this.router.navigate([this.login]);
    return false;
  }
}
