import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';
import { selectVideoItemState } from 'src/app/redux/selectors/cards.selector';
import { AppState } from 'src/app/redux/state.models';

import { ISearchItem } from '../../models/search-item-model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})

export class DetailsComponent implements OnDestroy {
  card?:ISearchItem;

  subscription!:Subscription;

  constructor(public routed:ActivatedRoute, private router:Router, private store:Store<AppState>) {
    this.subscription = this.routed.params.subscribe(({ id }) => {
      this.store.select(selectVideoItemState, { id }).subscribe((item) => {
        this.card = item;
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  navBack() {
    this.router.navigate(['home']);
  }
}
