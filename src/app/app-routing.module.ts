import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {SelectivePreloadingStrategy} from './selective-preloading-strategy';

/**
 * Created by super on 2018/6/27.
 */
const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '', loadChildren: 'app/login/login.module#loginModule'},
  {path: 'app', loadChildren: 'app/main/main.module#MainModule'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: SelectivePreloadingStrategy, useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}



