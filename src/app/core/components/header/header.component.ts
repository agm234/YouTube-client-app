import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SortDataService } from 'src/app/youtube/services/sortdata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  searchCards:string = '';

  showBlock = false;

  constructor(private search:SortDataService) {
  }

  onFind(searchCards:string) {
    this.search.setStr(searchCards);
  }
}
