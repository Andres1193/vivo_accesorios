import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { MainPageComponent } from './pages/main-page-login.component';



@NgModule({
  declarations: [
    LoginComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class LoginModule { }
