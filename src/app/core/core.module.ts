import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from '../auth/components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { FiltersComponent } from '../youtube/components/filters/filters.component';
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
    SharedModule,
  ],
  exports: [
    SearchBarComponent,
    HeaderComponent,
    FiltersComponent,
    LoginComponent,
  ],
})
export class CoreModule { }
