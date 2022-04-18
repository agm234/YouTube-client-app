import {
  ChangeDetectionStrategy, Component, OnDestroy, OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, Subscription } from 'rxjs';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit, OnDestroy {
  isLogined? = new BehaviorSubject<boolean>(false);

  username? = new BehaviorSubject<string>('Your Name');

  subscription?:Subscription;

  constructor(private router:Router, private auth:AuthService) {
  }

  ngOnInit() {
    this.subscription = this.auth.isLogin$.subscribe((data) => {
      this.isLogined?.next(data);
    });
    this.subscription = this.auth.username$.subscribe((data) => {
      this.username?.next(data);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onLogout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }

  onLogin() {
    this.router.navigate(['login']);
  }
}
