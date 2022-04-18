import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { createCard } from 'src/app/redux/actions';
import { AppState } from 'src/app/redux/state.models';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  form:FormGroup;

  constructor(private store: Store<AppState>, private router:Router) {
    this.form = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      imageUrl: new FormControl(''),
      videolink: new FormControl(''),
    });
  }

  onSubmit(event:Event) {
    event.preventDefault();
    const publishedAt = Date.now();
    this.store.dispatch(createCard({ payload: { ...this.form.value, publishedAt } }));
    this.router.navigate(['/home']);
  }
}
