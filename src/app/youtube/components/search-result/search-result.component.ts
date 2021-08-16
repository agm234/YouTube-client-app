import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import { ISearchItem } from '../../models/search-item-model';
import { SortdataService } from '../../services/sortdata.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultComponent implements OnInit {
  isDesc: boolean = false;

  search?: string;

  searchStr?: string;

  cards$: Observable<ISearchItem[] | null> = new BehaviorSubject([]);

  cardsSubscription!: Subscription
  ;

  constructor(private sortdataService: SortdataService) {
    this.search = '';
    this.isDesc = false;
    this.searchStr = '';
  }

  ngOnInit(): void {
    this.cards$ = this.sortdataService.items$;
    this.cardsSubscription = this.sortdataService.search$.subscribe((data) => {
      this.search = data;
      this.sortdataService.getCards();
    });
    this.cardsSubscription = this.sortdataService.isDesc$.subscribe((data) => {
      this.isDesc = data;
    });
    this.cardsSubscription = this.sortdataService.searchStr$.subscribe((data) => {
      this.searchStr = data;
      this.sortdataService.getCards();
    });
  }
}
