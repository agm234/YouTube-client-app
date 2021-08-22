import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

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

  filter: string;

  searchStr?: string;

  cards$?: Observable<ISearchItem[]>;

  cardsSubscription!: Subscription
  ;

  constructor(private sortdataService: SortdataService) {
    this.filter = '';
    this.isDesc = false;
    this.searchStr = '';
  }

  ngOnInit(): void {
    this.cards$ = this.sortdataService.items$;
    this.cardsSubscription = this.sortdataService.filter$.subscribe((data) => {
      this.filter = data;
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
