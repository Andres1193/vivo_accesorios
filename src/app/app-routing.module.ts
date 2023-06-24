import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './listado-general/components/listado/listado.component';
import { LoginComponent } from './login/components/login/login.component';
// import { ModalEliminarComponent } from './producto/components/modal-eliminar/modal-eliminar.component';
import { EditarComponentProducto } from './producto/components/producto/editar/editar.component';
import { EditarRecetaComponent } from './receta/components/editar-receta/editar-receta.component';
import { EditarProveedorComponent } from './proveedor/components/editar-proveedor/editar-proveedor.component';
import { RegistroProveedorComponent } from './proveedor/components/registro-proveedor/registro-proveedor.component';
import { RegistroUsuarioComponent } from './usuario/components/registro-usuario/registro-usuario.component';
import { RegistroRecetaComponent } from './receta/components/registro-receta/registro-receta.component';
import { RegistroComponentMateriasCrudas } from './materias/components/materias-crudas/registro-materias-crudas/registro-materias-crudas.component';
import { RegistroClienteComponent } from './cliente/components/registro-cliente/registro-cliente.component';
import { RegistroComponentProducto } from './producto/components/producto/registro/registro.component';
import { RegistroComponentMateriasListas } from './materias/components/materias-listas/registro-materias-listas/registro-materias-listas.component';




const routes: Routes = [
    { path: 'login', component: LoginComponent, pathMatch:'full' },
    { path: '', redirectTo: '/home', pathMatch:'full'},
    { path: 'home', component: ListadoComponent, pathMatch:'full'},
    { path: 'producto', component: RegistroComponentProducto, pathMatch:'full'},
    { path: 'proveedor', component: RegistroProveedorComponent, pathMatch:'full'},
    { path: 'usuario', component: RegistroUsuarioComponent, pathMatch:'full'},
    { path: 'receta', component: RegistroRecetaComponent, pathMatch:'full'},
    { path: 'cliente', component: RegistroClienteComponent, pathMatch:'full'},
    { path: 'mp_crudas', component: RegistroComponentMateriasCrudas, pathMatch:'full'},
    { path: 'mp_listas', component: RegistroComponentMateriasListas, pathMatch:'full'},
    // { path: 'register', component: SignInComponent },
    
    { path: '**', redirectTo: '/home' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
