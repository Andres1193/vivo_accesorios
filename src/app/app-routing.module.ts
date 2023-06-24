import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './listado-general/components/listado/listado.component';
import { LoginComponent } from './login/components/login/login.component';
import { RegistroUsuarioComponent } from './usuario/components/registro-usuario/registro-usuario.component';
import { RegistroComponentProducto } from './producto/components/producto/registro/registro.component';
import { ModalEliminarComponent } from './producto/components/modal-eliminar/modal-eliminar.component';
import { EditarComponentProducto } from './producto/components/producto/editar/editar.component';
import { EditarRecetaComponent } from './receta/components/editar-receta/editar-receta.component';



const routes: Routes = [
    { path: 'login', component: LoginComponent, pathMatch:'full' },
    { path: '', redirectTo: '/home', pathMatch:'full'},
    { path: 'home', component: ListadoComponent, pathMatch:'full'},
    { path: 'producto', component: EditarComponentProducto, pathMatch:'full'},
    { path: 'receta', component: EditarRecetaComponent, pathMatch:'full'},
    // { path: 'usuario', component: RegistroComponent, pathMatch:'full'},
   // { path: 'registroproducto', component: RegistroComponentProducto, pathMatch:'full'},
    // { path: 'register', component: SignInComponent },
    { path: '**', redirectTo: '/home' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
