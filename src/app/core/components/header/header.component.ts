import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { SortdataService } from 'src/app/youtube/services/sortdata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  searchCards:string;

  showBlock = false;

  constructor(private search:SortdataService, private rout:Router) {
    this.searchCards = '';
  }

  onFind(searchCards:string) {
    this.search.setStr(searchCards);
  }

  logout() {
    localStorage.clear();
    this.rout.navigate(['login']);
    this.showBlock = false;
  }
}
