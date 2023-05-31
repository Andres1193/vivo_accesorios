import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ListadoComponent } from './components/listado/listado.component';
import { EditarComponent } from './components/editar/editar.component';



const routes: Routes = [
    {
        path: "", component: AppComponent, pathMatch: "full"
    },
    {
        path: "login", component: LoginComponent, pathMatch: "full",
        children: [
            {path: "registro", component: RegistroComponent, pathMatch: "full"},
            {path: "listado", component: ListadoComponent, pathMatch: "full"},
            {path: "editar", component: EditarComponent, pathMatch: "full"},
        ]
    },
    {
        path: "**", redirectTo: "login"
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
