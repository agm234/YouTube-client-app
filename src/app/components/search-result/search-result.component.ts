import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ISearchItem } from '../../models/search-item-model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultComponent {
  @Input() cards: ISearchItem[] = [];

  @Input() isDesc: boolean = false;

  @Input() search?: string;

  @Input() searchStr?: string;

  @Input() searchCards?: string;
}
