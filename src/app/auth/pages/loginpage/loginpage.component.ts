import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss'],
})
export class LoginPageComponent implements OnInit {
  form:FormGroup;

  constructor(private router:Router, private auth:AuthService) {
    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  ngOnInit() {
    if (this.auth.isLogined()) {
      this.router.navigate(['/home']);
    }
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.auth.login(this.form?.value);
    if (this.auth.isLogined()) {
      this.router.navigate(['/home']);
    }
  }
}
