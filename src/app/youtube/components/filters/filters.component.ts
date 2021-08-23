import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SortDataService } from '../../services/sortdata.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent {
  searchStr:string = '';

  isDesc:boolean = false;

  search:string = '';

  constructor(private sortDataService:SortDataService) {
  }

  onSort(search:string) {
    this.isDesc = !this.isDesc;
    this.search = search;
    this.sortDataService.setFilter(this.search, this.isDesc);
  }

  onFilter(searchStr:string) {
    this.searchStr = searchStr;
    this.sortDataService.setSearchStr(this.searchStr);
  }
}
