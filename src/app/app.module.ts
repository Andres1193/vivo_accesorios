import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { UsuarioModule } from "./usuario/usuario.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginModule } from "./login/login.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductoModule } from "./producto/producto.module";
import { RouterModule } from "@angular/router";
import { ModalEliminarModule } from "./producto/components/modal-eliminar/modal-eliminar.module";
import { MatSelectModule } from "@angular/material/select";
import { ListadoGeneralModule } from "./listado-general/listado-general.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import { RecetaModule } from "./receta/receta.module";



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
    RouterModule,
    MatFormFieldModule,
    MatSelectModule,
    ListadoGeneralModule,
    RecetaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
