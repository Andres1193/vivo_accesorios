import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './components/registro/registro.component';
import { ListadoComponent } from './components/listado/listado.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './pages/main-page-usuario.component';
import { EditarComponent } from './components/editar/editar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    RegistroComponent,
    ListadoComponent,
    MainPageComponent,
    EditarComponent,
    LoginComponent,
    MainPageComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class UsuarioModule { }
