import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

//PrimeNG imports
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {CheckboxModule} from 'primeng/checkbox';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule
  ]
})
export class PublicModule { }
