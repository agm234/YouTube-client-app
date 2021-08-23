import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { ISearchItem } from '../../models/search-item-model';
import { SortDataService } from '../../services/sortdata.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultComponent implements OnInit, OnDestroy {
  isDesc: boolean = false;

  filter: string = '';

  searchStr: string = '';

  filterSubscription?:Subscription;

  isDescSubscription?:Subscription;

  searchStrSubscription?:Subscription;

  cards$?: Observable<ISearchItem[]>;

  constructor(private sortDataService: SortDataService) {
  }

  ngOnInit(): void {
    this.cards$ = this.sortDataService.items$;
    this.filterSubscription = this.sortDataService.filter$.subscribe((data) => {
      this.filter = data;
      this.sortDataService.getCards();
    });
    this.isDescSubscription = this.sortDataService.isDesc$.subscribe((data) => {
      this.isDesc = data;
    });
    this.searchStrSubscription = this.sortDataService.searchStr$.subscribe((data) => {
      this.searchStr = data;
      this.sortDataService.getCards();
    });
  }

  ngOnDestroy(): void {
    if (this.filterSubscription) {
      this.filterSubscription.unsubscribe();
    }
    if (this.isDescSubscription) {
      this.isDescSubscription.unsubscribe();
    }
    if (this.isDescSubscription) {
      this.isDescSubscription.unsubscribe();
    }
  }
}
