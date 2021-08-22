import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, Subscription } from 'rxjs';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  islogined? = new BehaviorSubject<boolean>(false);

  videosSubscription!: Subscription
  ;

  username?:string;

  constructor(private rout:Router, private auth:AuthService) {
  }

  ngOnInit() {
    this.videosSubscription = this.auth.isLogin$.subscribe((data) => {
      this.islogined?.next(data);
      this.username = this.auth.username;
    });
  }

  onLogout() {
    this.auth.logout();
    this.rout.navigate(['login']);
  }

  onLogin() {
    this.rout.navigate(['login']);
  }
}
