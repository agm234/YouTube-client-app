import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

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
    this.videosSubscription = this.sortdataService.str$.subscribe((data) => {
      if (data.length === 0) {
        this.issearch = false;
      } else {
        this.issearch = true;
      }
    });
  }
}
