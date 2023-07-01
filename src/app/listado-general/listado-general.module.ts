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
import { NgbCollapseModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ModalComponent } from './modal/modal.component';
import { ProveedorModule } from "../proveedor/proveedor.module";
import { RecetaModule } from "../receta/receta.module";
import { ClienteModule } from "../cliente/cliente.module";
import { MateriasModule } from "../materias/materias.module";
import { PedidoModule } from "../pedido/pedido.module";

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
        NgbCollapseModule,
        ProveedorModule,
        RecetaModule,
        ClienteModule,
        MateriasModule,
        PedidoModule
    ]
})
export class ListadoGeneralModule {}
