import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';

@NgModule({
  declarations: [
    LoginpageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
  ],
  exports: [
    LoginpageComponent,
  ],
})
export class AuthModule { }
