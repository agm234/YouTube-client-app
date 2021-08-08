import { Component } from '@angular/core';

import { SearchData } from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'YouTubeClientApp';

  cards = SearchData.items;

  isDesc:boolean;

  search:string;

  showBlock:boolean;

  searchStr:string;

  searchCards:string;

  constructor() {
    this.showBlock = false;
    this.isDesc = false;
    this.search = '';
    this.searchStr = '';
    this.searchCards = '';
  }

  onShowEvent() {
    this.showBlock = !this.showBlock;
  }

  onSortByViews(search:string) {
    this.isDesc = !this.isDesc;
    this.search = search;
  }

  onFilter(searchStr:string) {
    this.searchStr = searchStr;
  }

  onFind(searchCards:string) {
    this.searchCards = searchCards;
  }
}
