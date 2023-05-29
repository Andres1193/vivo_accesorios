import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './usuario/components/login/login.component';
import { RegistroComponent } from './usuario/components/registro/registro.component';
import { ListadoComponent } from './usuario/components/listado/listado.component';
import { EditarComponent } from './usuario/components/editar/editar.component';


const routes: Routes = [
  {path: "", component: AppComponent, pathMatch: "full"},
  {path: "login", component: LoginComponent, pathMatch: "full"},
  {path: "registro", component: RegistroComponent, pathMatch: "full"},
  {path: "listado", component: ListadoComponent, pathMatch: "full"},
  {path: "editar", component: EditarComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
