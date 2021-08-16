import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FiltersComponent } from '../youtube/components/filters/filters.component';
import { LoginComponent } from './components/header/components/login/login.component';
import { SearchBarComponent } from './components/header/components/search-bar/search-bar.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    SearchBarComponent,
    HeaderComponent,
    FiltersComponent,
    LoginComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    SearchBarComponent,
    HeaderComponent,
    FiltersComponent,
    LoginComponent,
  ],
})
export class CoreModule { }
