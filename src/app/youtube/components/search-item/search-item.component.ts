import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ISearchItem } from '../../models/search-item-model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchItemComponent {
  @Input() card?: ISearchItem;

  constructor(private router:Router) {
  }

  nav(id:string) {
    this.router.navigate(['details', id]);
  }
}
