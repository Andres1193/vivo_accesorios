import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pedido } from '../../interfaces/pedido.interface';

@Component({
  selector: 'app-editar-pedido',
  templateUrl: './editar-pedido.component.html',
  styleUrls: ['./editar-pedido.component.css']
})
export class EditarPedidoComponent {
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

  actualizarPedido(){
    
  }

}
