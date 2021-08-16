import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthLoadGuard implements CanLoad {
  constructor(private rout:Router, private auth:AuthService) {

  }

  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    const isauth = this.auth.Islogined();
    if (isauth) {
      return true;
    }

    this.rout.navigate(['/login']);
    return false;
  }
}
