import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './usuario/components/listado/listado.component';
import { RegistroComponent } from './usuario/components/registro/registro.component';

const routes: Routes = [
  { path: 'listado', component: ListadoComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '', redirectTo: '/listado', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
