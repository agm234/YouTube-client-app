import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ISearchItem } from '../../models/search-item-model';
import { SortdataService } from '../../services/sortdata.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchItemComponent {
  @Input() card?: ISearchItem;

  constructor(private rout:Router, private sortdataService:SortdataService) {
  }

  nav(id:string) {
    this.rout.navigate(['details', id]);
  }
}
