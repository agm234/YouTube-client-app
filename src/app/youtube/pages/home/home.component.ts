import { Component, OnInit } from '@angular/core';

import { interval, Subscription } from 'rxjs';
import { debounce } from 'rxjs/operators';

import { SortdataService } from '../../services/sortdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  videosSubscription!: Subscription
  ;

  issearch:boolean = false;

  constructor(private sortdataService:SortdataService) {
  }

  ngOnInit() {
    this.videosSubscription = this.sortdataService.search$.pipe(debounce(() => interval(500))).subscribe((data) => {
      if (data.length < 3) {
        this.issearch = false;
      } else {
        this.sortdataService.getCards(data);
        this.sortdataService.globalsearch = data;
        this.issearch = true;
      }
    });
  }
}
