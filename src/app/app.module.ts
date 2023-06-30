import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductoModule } from "./producto/producto.module";
import { RouterModule } from "@angular/router";
import { ListadoGeneralModule } from "./listado-general/listado-general.module";
import { RecetaModule } from "./receta/receta.module";
import { ProveedorModule } from "./proveedor/proveedor.module";
import { MateriasModule } from "./materias/materias.module";
import { ClienteModule } from './cliente/cliente.module';
import { NgbModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductoModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ListadoGeneralModule,
    RecetaModule,
    ProveedorModule,
    MateriasModule,
    ClienteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
