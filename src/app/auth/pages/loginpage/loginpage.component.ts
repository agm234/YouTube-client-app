import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss'],
})
export class LoginpageComponent implements OnInit {
  form:FormGroup;

  constructor(private rout:Router, private auth:AuthService) {
    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  ngOnInit() {
    if (this.auth.islogined()) {
      this.rout.navigate(['/home']);
    }
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    const isAuth:boolean = this.auth.login(this.form?.value);
    if (isAuth) {
      this.auth.isLogin$.next(true);
      this.rout.navigate(['/home']);
    }
  }
}
