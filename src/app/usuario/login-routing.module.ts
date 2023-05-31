import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ListadoComponent } from './components/listado/listado.component';
import { EditarComponent } from './components/editar/editar.component';



const routes: Routes = [
    {
        path: '', component: LoginComponent,
        children: [
            {path: 'registro', component: RegistroComponent},
            {path: 'listado', component: ListadoComponent},
            {path: 'editar', component: EditarComponent},
        ]
    },
    {
        path: '**', redirectTo: ''
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
