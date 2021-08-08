import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FiltersComponent } from './components/filters/filters.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SearchPipe } from './pipes/search.pipe';
import { SortByDate } from './pipes/sortByDate.pipe';
import { SortByViews } from './pipes/sortByViews.pipe';
import { SharedModule } from './shared/shared.module';
import { CardMarkerColorDirective } from './directives/card-marker-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiltersComponent,
    LoginComponent,
    SearchResultComponent,
    SearchItemComponent,
    SearchPipe,
    SortByViews,
    SortByDate,
    CardMarkerColorDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
