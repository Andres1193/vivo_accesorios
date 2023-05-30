import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './usuario/components/login/login.component';
import { RegistroComponent } from './usuario/components/registro/registro.component';
import { ListadoComponent } from './usuario/components/listado/listado.component';
import { EditarComponent } from './usuario/components/editar/editar.component';


const routes: Routes = [
  {path: "", component: AppComponent},
  {path: "login", component: LoginComponent},
  {path: "registro", component: RegistroComponent},
  {path: "listado", component: ListadoComponent},
  {path: "editar", component: EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
