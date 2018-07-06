import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from './main.component';
import {MainRoutingModule} from './main-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    NgbModule
  ],
  declarations: [
    MainComponent
  ]
})
export class MainModule { }
