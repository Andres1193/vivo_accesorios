import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './usuario/components/login/login.component';
import { ListadoComponent } from './usuario/components/listado/listado.component';



const routes: Routes = [
    { path: 'login', component: LoginComponent, pathMatch:'full' },
    { path: '', redirectTo: '/home', pathMatch:'full'},
    { path: 'home', component: ListadoComponent, pathMatch:'full'},
    // { path: 'register', component: SignInComponent },
    { path: '**', redirectTo: '/home' }
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
