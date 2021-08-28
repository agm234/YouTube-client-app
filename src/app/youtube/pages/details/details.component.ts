import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { selectVideoItemState } from 'src/app/redux/selectors/cards.selector';
import { AppState } from 'src/app/redux/state.models';

import { ISearchItem } from '../../models/search-item-model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})

export class DetailsComponent {
  card?:ISearchItem;

  constructor(public routed:ActivatedRoute, private router:Router, private store:Store<AppState>) {
    this.routed.params.subscribe(({ id }) => {
      this.store.select(selectVideoItemState, { id }).subscribe((item) => {
        this.card = item;
      });
    });
  }

  navBack() {
    this.router.navigate(['home']);
  }
}
