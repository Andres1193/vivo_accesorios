import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListadoGeneralRoutingModule } from "./listado-general-routing.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";
import { ListadoComponent } from "./components/listado/listado.component";

@NgModule({
  declarations: [
    ListadoComponent
  ],
  imports: [
    CommonModule,
    ListadoGeneralRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    AppRoutingModule,
    RouterModule
  ]
})
export class ListadoGeneralModule {}
