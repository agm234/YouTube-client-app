import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ISearchItem } from '../../models/search-item-model';
import { SortDataService } from '../../services/sortdata.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})

export class DetailsComponent {
  card?:ISearchItem;

  constructor(public routed:ActivatedRoute, private router:Router, private sortData:SortDataService) {
    this.routed.params.subscribe(({ id }) => {
      this.sortData.getCard(id).subscribe((data) => {
        this.card = data;
      });
    });
  }

  navBack() {
    this.router.navigate(['home']);
  }
}
