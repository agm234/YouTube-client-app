import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ISearchItem } from '../../models/search-item-model';
import { SortdataService } from '../../services/sortdata.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})

export class DetailsComponent {
  card?:ISearchItem;

  constructor(public routed:ActivatedRoute, private rout:Router, private sortdata:SortdataService) {
    this.routed.params.subscribe(({ id }) => {
      sortdata.getCard(id).subscribe((data) => {
        this.card = data;
      });
    });
  }

  navBack() {
    this.rout.navigate(['home']);
  }
}
