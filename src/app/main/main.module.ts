import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from './main.component';
import {MainRoutingModule} from './main-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    NgbModule,
    TranslateModule
  ],
  declarations: [
    MainComponent
  ]
})
export class MainModule { }
