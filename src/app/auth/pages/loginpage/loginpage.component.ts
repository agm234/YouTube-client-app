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
  form ?:FormGroup;

  constructor(private rout:Router, private auth:AuthService) {
    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  ngOnInit() {
    if (this.auth.Islogined()) {
      this.rout.navigate(['/home']);
    }
  }

  public onSubmit(event: Event): void {
    event.preventDefault();
    this.auth.login(this.form?.value);
    if (this.auth.Islogined()) {
      this.rout.navigate(['/home']);
    }
  }
}
