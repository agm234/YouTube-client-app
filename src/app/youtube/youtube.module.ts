import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { CardMarkerColorDirective } from './directives/card-marker-color.directive';
import { DetailsComponent } from './pages/details/details.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { SearchPipe } from './pipes/search.pipe';
import { SortByDate } from './pipes/sortByDate.pipe';
import { SortByViews } from './pipes/sortByViews.pipe';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    SearchResultComponent,
    SearchItemComponent,
    SearchPipe,
    SortByViews,
    SortByDate,
    CardMarkerColorDirective,
    DetailsComponent,
    NotfoundComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    YoutubeRoutingModule,
  ],
  exports: [
    SearchResultComponent,
    SearchItemComponent,
    SearchPipe,
    SortByViews,
    SortByDate,
    CardMarkerColorDirective,
    DetailsComponent,
    NotfoundComponent,
  ],
})
export class YoutubeModule { }
