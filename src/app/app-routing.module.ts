import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './listado-general/components/listado/listado.component';
import { LoginComponent } from './login/components/login/login.component';
import { RegistroComponent } from './usuario/components/registro/registro.component';
import { RegistroComponentProducto } from './producto/components/producto/registro/registro.component';



const routes: Routes = [
    { path: 'login', component: LoginComponent, pathMatch:'full' },
    { path: '', redirectTo: '/home', pathMatch:'full'},
    { path: 'home', component: ListadoComponent, pathMatch:'full'},
    { path: 'producto', component: RegistroComponentProducto, pathMatch:'full'},
    { path: 'usuario', component: RegistroComponent, pathMatch:'full'},
   // { path: 'registroproducto', component: RegistroComponentProducto, pathMatch:'full'},
    // { path: 'register', component: SignInComponent },
    { path: '**', redirectTo: '/home' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
