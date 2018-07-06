import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {SelectivePreloadingStrategy} from './selective-preloading-strategy';
import {HttpService} from './http/http.service';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [
    SelectivePreloadingStrategy,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
