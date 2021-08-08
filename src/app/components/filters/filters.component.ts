import {
  ChangeDetectionStrategy, Component, EventEmitter, Output,
} from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent {
  searchStr = '';

  @Output() Filter = new EventEmitter<string>();

  @Output() Sort = new EventEmitter<string>();
}
