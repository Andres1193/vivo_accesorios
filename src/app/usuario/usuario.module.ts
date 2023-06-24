import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';



@NgModule({
  declarations: [
    RegistroUsuarioComponent,
    EditarUsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    RouterModule,
    AppRoutingModule
  ],
  exports: [
  ]
})
export class UsuarioModule { }
