import { Component } from '@angular/core';
import { Pedido } from '../../interfaces/pedido.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-pedido',
  templateUrl: './registro-pedido.component.html',
  styleUrls: ['./registro-pedido.component.css']
})
export class RegistroPedidoComponent {
  public pedidoForm: FormGroup;
  public pedido: Pedido = {
    codigoPedido: 0,
    fecha: new Date,
    clientes: [],
    valor_total: 0,
    cantidad: 0,
    productos: []
  }

  opcionSeleccionada: string = '';

  seleccionarOpcion(opcion: string): void {
    this.opcionSeleccionada = opcion;
  }

  constructor(private formBuilder: FormBuilder) {
    this.pedidoForm = this.formBuilder.group({
      codigo_mp: [0, Validators.required],
      cantidad: [0, Validators.required]
    });
  }

  crearPedido(){
    
  }

}
