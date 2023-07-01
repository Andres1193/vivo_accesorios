import { Component, Input } from '@angular/core';
import { Proveedor } from '../../../proveedor/interfaces/proveedor.interface';
import { Cliente } from 'src/app/cliente/interfaces/cliente.interfaces';
import { Producto } from 'src/app/producto/interfaces/producto.interface';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Receta } from 'src/app/receta/interfaces/receta.interface';
import { Pedido } from 'src/app/pedido/interfaces/pedido.interface';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})

export class ListadoComponent {

  constructor(private router: Router) {}

  public opcion = '';

  public isCollapsed = true;

  public frontActual: string = ''; // frontActual

  flagContent: boolean = false;

  searchItem: string = '';

  ngOnInit(): void {
  }

  public proveedor: Proveedor = {
    cod_proveedor: '',
    nombre: '',
    telefono_1: '',
    direccion: '',
    ciudad: '',
    estado: 'a',
  };

  @Input() proveedores: Proveedor[] = [];

  public columnProveedor: string[] = [
    'Nombre',
    'Apellido',
    'Correo',
    'Dirección',
    'Telefono',
  ];

  public cliente: Cliente = {
    identificacion: '',
    nombre: '',
    apellido: '',
    correo: '',
    direccion: '',
    telefono: '',
    ciudad: '',
    estado:'a'
  };

  @Input() clientes: Cliente[] = [];

  public columnCliente: string[] = [
    'Identificación',
    'Nombre',
    'Apellido',
    'Correo',
    'Dirección',
    'Telefono',
    'Ciudad'
  ];

  public producto: Producto = {
    idProducto: 0,
    codigoProducto: '',
    nombre: '',
    costo_Producto: 0,
    porcent_Utilidad: 0,
    precio_Producto: 0,
    estado: 'a',
    stock:0,
    idPedido: '' // TODO: acceder a la base de datos para consultar el pedido
  };

  @Input() productos: Producto[] = [];

  public columnProducto: string[] = [
    'Código Producto',
    'Nombre',
    'Costo Producto',
    '% Utilidad',
    'Precio Producto',
    'Stock'
  ];

  public receta: Receta = {
    codigo_mp: 0,
    descripcion_mp: '',
    cantidad: 0,
    unidad_medida: [],
    costo_unitario: 0,
    costo_total_unitario: 0
  }

  @Input() recetas: Receta[] = [];

  public columnReceta: string[] = [
    'Código Materia Prima',
    'Descripcion',
    'Cantidad',
    'Unidad de Medida',
    'Costo Unitario',
    'Costo Total Unitario'
  ];

  public pedido: Pedido = {
    codigoPedido: 0,
    fecha: new Date,
    clientes: [],
    valor_total: 0,
    cantidad: 0,
    productos: []
  }

  @Input() pedidos: Pedido[] = [];

  public columnPedido: string[] = [
    'Código Pedido',
    'Fecha',
    'cliente',
    'Valor Total',
    'Cantidad',
    'Productos'
  ];

  selectLista(name: string): void {
    this.frontActual = name;
    if(this.opcion != ""){
      this.showCreate("");
    }
    
  }

  getAtributos(): string[] {
    let atributos: string[] = [''];

    if (this.frontActual.match('Cliente')) {
      atributos = this.columnCliente;
    } else if (this.frontActual.match('Provedor')) {
      atributos = this.columnProveedor;
    } else if (this.frontActual.match('Producto')) {
      atributos = this.columnProducto;
    } else if (this.frontActual.match('Receta')) {
      atributos = this.columnReceta;
    } else if (this.frontActual.match('Pedido')) {
      atributos = this.columnPedido;
    } 


    return atributos;
  }

  showCreate(opcion: string): void {
    this.flagContent = !this.flagContent;
    this.opcion = opcion;
    // if(opcion != ""){
    //   switch (this.frontActual) {
    //     case "Producto":
    //       if(opcion == "1"){
    //         this.router.navigate(['/registro_producto']);
    //       }
    //   }
    // }
  }

  // callToShow(): void {
  //   this.showCreate();
  // }

  showModal(): void {
    this.router.navigate(['/modalEliminar']);
  }

}
