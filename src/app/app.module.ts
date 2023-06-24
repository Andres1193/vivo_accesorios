import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { UsuarioModule } from "./usuario/usuario.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginModule } from "./login/login.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { ProductoModule } from "./producto/producto.module";
import { RouterModule } from "@angular/router";
import { ModalEliminarModule } from "./modal-eliminar/modal-eliminar.module";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsuarioModule,
    ProductoModule,
    AppRoutingModule,
    ModalEliminarModule,
    BrowserAnimationsModule,
    LoginModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
