import { Component, OnDestroy, OnInit } from '@angular/core';

import { interval, Subscription } from 'rxjs';
import { debounce } from 'rxjs/operators';

import { SortDataService } from '../../services/sortdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  isSearch:boolean = false;

  subscription?:Subscription;

  constructor(private sortDataService:SortDataService) {
  }

  ngOnInit() {
    this.subscription = this.sortDataService.search$.pipe(debounce(() => interval(500))).subscribe((data) => {
      if (data.length < 3) {
        this.isSearch = !data.length;
      } else {
        this.sortDataService.getCards(data);
        this.sortDataService.globalsearch = data;
        this.isSearch = true;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
