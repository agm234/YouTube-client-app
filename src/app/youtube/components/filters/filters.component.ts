import {
  ChangeDetectionStrategy, Component, EventEmitter, Output,
} from '@angular/core';

import { SortdataService } from '../../services/sortdata.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent {
  searchStr = '';

  isDesc:boolean;

  search:string;

  showBlock = false;

  constructor(private sortdataService:SortdataService) {
    this.isDesc = false;
    this.search = '';
    this.searchStr = '';
  }

  onSort(search:string) {
    this.isDesc = !this.isDesc;
    this.search = search;
    this.sortdataService.setSearch(this.search, this.isDesc);
  }

  onFilter(searchStr:string) {
    this.searchStr = searchStr;
    this.sortdataService.setSearchStr(this.searchStr);
  }

  @Output() Filter = new EventEmitter<string>();

  @Output() Sort = new EventEmitter<string>();
}
