import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthLoadGuard } from './auth/guard/auth-load.guard';
import { AuthGuard } from './auth/guard/auth.guard';
import { NotfoundComponent } from './youtube/pages/notfound/notfound.component';

const routes:Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import ('./youtube/youtube.module').then((m) => m.YoutubeModule),
    canLoad: [AuthLoadGuard],
  },

  {
    path: 'login',
    loadChildren: () => import ('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    component: NotfoundComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
