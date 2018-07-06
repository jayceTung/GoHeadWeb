import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    LoginRoutingModule,
    TranslateModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
