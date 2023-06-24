import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListadoGeneralRoutingModule } from "./listado-general-routing.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";
import { ListadoComponent } from "./components/listado/listado.component";
import { ProductoModule } from "../producto/producto.module";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgbCollapseModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";

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
        AppRoutingModule,
        RouterModule,
        NgbModule,
        ProductoModule,
        NgbCollapseModule
    ]
})
export class ListadoGeneralModule {}
