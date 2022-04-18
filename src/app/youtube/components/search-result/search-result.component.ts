import {
  ChangeDetectionStrategy, Component, OnDestroy, OnInit,
} from '@angular/core';
import { select, Store } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';
import { getCards } from 'src/app/redux/actions';
import { selectVideosState } from 'src/app/redux/selectors/cards.selector';
import { AppState } from 'src/app/redux/state.models';

import { ISearchItem } from '../../models/search-item-model';
import { SortDataService } from '../../services/sortdata.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultComponent implements OnInit, OnDestroy {
  isDesc = false;

  filter = '';

  searchStr = '';

  private subs: Subscription = new Subscription();

  cards$?: Observable<ISearchItem[]>;

  constructor(private sortDataService: SortDataService, private store:Store<AppState>) {
    this.cards$ = store.pipe(select(selectVideosState));
  }

  ngOnInit(): void {
    this.subs.add(this.sortDataService.filter$.subscribe((data) => {
      this.filter = data;
      this.store.dispatch(getCards());
    }));
    this.subs.add(this.sortDataService.isDesc$.subscribe((data) => {
      this.isDesc = data;
    }));
    this.subs.add(this.sortDataService.searchStr$.subscribe((data) => {
      this.searchStr = data;
      this.store.dispatch(getCards());
    }));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
