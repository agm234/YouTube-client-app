import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { INTERCEPTOR_PROVIDERS } from './interceptors/providers';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [CommonModule,
    MaterialModule, FormsModule, ReactiveFormsModule],
  providers: INTERCEPTOR_PROVIDERS,
})
export class SharedModule { }
