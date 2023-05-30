import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './components/registro/registro.component';
import { ListadoComponent } from './components/listado/listado.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './pages/main-page-usuario.component';
import { EditarComponent } from './components/editar/editar.component';

import { LoginComponent } from './components/login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    RegistroComponent,
    ListadoComponent,
    MainPageComponent,
    EditarComponent,
    LoginComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class UsuarioModule { }
