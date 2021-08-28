import {
  ChangeDetectionStrategy, Component, OnDestroy, OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { searchStr } from 'src/app/redux/actions';
import { AppState } from 'src/app/redux/state.models';
import { SortDataService } from 'src/app/youtube/services/sortdata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnDestroy, OnInit {
  searchCards:string = '';

  isLogined:boolean = false;

  subscription?:Subscription;

  showBlock = false;

  constructor(private search:SortDataService, private store:Store<AppState>, private router:Router, private auth:AuthService) {
  }

  onFind(searchCards:string) {
    if (!this.isLogined) {
      return;
    }
    if (searchCards.length > 3) {
      this.search.setStr(searchCards);
      this.store.dispatch(searchStr({ payload: searchCards }));
    }
  }

  onCreate() {
    this.router.navigate(['admin']);
  }

  ngOnInit() {
    this.subscription = this.auth.isLogin$.subscribe((data) => {
      this.isLogined = data;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
