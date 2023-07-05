import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './listado-general/components/listado/listado.component';
import { LoginComponent } from './login/components/login/login.component';
import { EditarComponentProducto } from './producto/components/producto/editar-producto/editar-producto.component';
import { EditarRecetaComponent } from './receta/components/editar-receta/editar-receta.component';
import { EditarProveedorComponent } from './proveedor/components/editar-proveedor/editar-proveedor.component';
import { RegistroProveedorComponent } from './proveedor/components/registro-proveedor/registro-proveedor.component';
import { RegistroUsuarioComponent } from './usuario/components/registro-usuario/registro-usuario.component';
import { RegistroRecetaComponent } from './receta/components/registro-receta/registro-receta.component';
import { RegistroComponentMateriasCrudas } from './materias/components/materias-crudas/registro-materias-crudas/registro-materias-crudas.component';
import { RegistroClienteComponent } from './cliente/components/registro-cliente/registro-cliente.component';
import { RegistroComponentMateriasListas } from './materias/components/materias-listas/registro-materias-listas/registro-materias-listas.component';
import { RegistroComponentProducto } from './producto/components/producto/registro-producto/registro-producto.component';
import { EditarUsuarioComponent } from './usuario/components/editar-usuario/editar-usuario.component';
import { EditarClienteComponent } from './cliente/components/editar-cliente/editar-cliente.component';
import { EditarComponentMateriasCrudas } from './materias/components/materias-crudas/editar-materias-crudas/editar-materias-crudas.component';
import { EditarComponentMateriasListas } from './materias/components/materias-listas/editar-materias-listas/editar-materias-listas.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent, pathMatch:'full' },
    { path: '', redirectTo: '/home', pathMatch:'full'},
    { path: 'home', component: ListadoComponent, pathMatch:'full'},
    { path: 'registro_producto', component: RegistroComponentProducto, pathMatch:'full'},
    { path: 'editar_producto', component: EditarComponentProducto, pathMatch:'full'},
    { path: 'registro_proveedor', component: RegistroProveedorComponent, pathMatch:'full'},
    { path: 'editar_proveedor', component: EditarProveedorComponent, pathMatch:'full'},
    { path: 'registro_usuario', component: RegistroUsuarioComponent, pathMatch:'full'},
    { path: 'editar_usuario', component: EditarUsuarioComponent, pathMatch:'full'},
    { path: 'registro_receta', component: RegistroRecetaComponent, pathMatch:'full'},
    { path: 'editar_receta', component: EditarRecetaComponent, pathMatch:'full'},
    { path: 'registro_cliente', component: RegistroClienteComponent, pathMatch:'full'},
    { path: 'editar_cliente', component: EditarClienteComponent, pathMatch:'full'},
    { path: 'registro_mp_crudas', component: RegistroComponentMateriasCrudas, pathMatch:'full'},
    { path: 'editar_mp_crudas', component: EditarComponentMateriasCrudas, pathMatch:'full'},
    { path: 'registro_mp_listas', component: RegistroComponentMateriasListas, pathMatch:'full'},
    { path: 'editar_mp_listas', component: EditarComponentMateriasListas, pathMatch:'full'},

    // { path: 'register', component: SignInComponent },

    { path: '**', redirectTo: '/home' }
    
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
