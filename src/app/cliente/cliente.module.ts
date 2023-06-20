import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { RegistroComponent } from './components/registro/registro.component';
import { EditarComponent } from './components/editar/editar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegistroComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    FormsModule
  ]
})
export class ClienteModule { }
