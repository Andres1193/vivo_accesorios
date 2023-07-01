import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Proveedor } from '../../../proveedor/interfaces/proveedor.interface';
import { Cliente } from 'src/app/cliente/interfaces/cliente.interfaces';
import { Producto } from 'src/app/producto/interfaces/producto.interface';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Receta } from 'src/app/receta/interfaces/receta.interface';
import { Pedido } from 'src/app/pedido/interfaces/pedido.interface';
import { MateriasListas } from 'src/app/materias/interfaces/materias-listas.interface';
import { MateriasCrudas } from 'src/app/materias/interfaces/materias-crudas.interfaces';
import { ProveedorService } from 'src/app/proveedor/services/proveedor.service';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
  providers: [NgbModalConfig, NgbModal],
})

export class ListadoComponent {

  constructor(config: NgbModalConfig, private modalService: NgbModal, 
    private proveedorService: ProveedorService) {

    config.backdrop = 'static';
    config.keyboard = false;
  }
  open<Type>(content: Type): void {
    this.modalService.open(content);
  }
  public opcion = '';

  public isCollapsed = true;

  public frontActual: string = ''; // frontActual

  flagContent: boolean = false;

  flag=true;

  searchItem: string = '';

  ngOnInit(): void {
    this.getProveedores();
  }

  public proveedor: Proveedor = {
    cod_proveedor: '',
    nombre: '',
    telefono_1: '',
    direccion: '',
    ciudad: '',
    estado: 'Activo',
  };

  @Input() proveedores: Proveedor[] = [];

  getProveedores(){
    return this.proveedorService.getProveeedores().subscribe(
      (proveedores: Proveedor[]) => {
        console.log(proveedores)
        this.proveedores = proveedores;
      }
      // (error: any) => {
        // // Manejar el error
      // }
    );
  }

  imprimirProveedores(){
    return this.proveedores
  }


  getPropiedades(proveedor: any){
    return Object.keys(proveedor);
  }

  public columnProveedor: string[] = [
    'Nombre',
    'Apellido',
    'Correo',
    'Dirección',
    'Telefono',
  ];

  public cliente: Cliente = {
    identificacion: '',
    nombres: '',
    apellidos: '',
    correo: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    estado:'Activo'
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
    estado: 'Activo',
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

  public lista: MateriasListas = {
    cod_interno: '',
    desc_mp: '',
    categoria_mp: [],
    cant_linea: 0,
    precio_linea: 0,
    unidad_medida: '',
    costo_unitario: 0,
    costo_total_unitario: 0,
    estado: '',
    costo_banio_linea: 0,
    cantidad_banada: 0,
    costo_banio_un: 0,
    proveedores: [],
    stock: 0
  }

  @Input() listas: MateriasListas[] = [];

  public columnMateriasListas: string[] = [
    'Código Materia Lista',
    'Descripcion',
    'Categoria',
    'Cantidad Linea',
    'Precio Linea',
    'Unidad de Medida',
    'Costo Unitario',
    'Costo Total Unitario',
    'Costo Baño Linea',
    'Cantidad Bañada',
    'Costo Baño Unidad',
    'Proveedores',
    'Stock',
  ];

  public cruda: MateriasCrudas = {
    cod_interno: '',
    desc_mp: '',
    categoria_mp: [],
    cant_linea: 0,
    precio_linea: 0,
    unidad_medida: '',
    costo_unitario: 0,
    costo_total_unitario: 0,
    estado: 'Activo',
    proveedores: [],
    stock: 0
  }

  @Input() crudas: MateriasCrudas[] = [];

  public columnMateriasCrudas: string[] = [
    'Código Materia Lista',
    'Descripcion',
    'Categoria',
    'Cantidad Linea',
    'Precio Linea',
    'Unidad de Medida',
    'Costo Unitario',
    'Costo Total Unitario',
    'Proveedores',
    'Stock',
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
    } else if (this.frontActual.match('Listas')) {
      atributos = this.columnMateriasListas;
    } else if (this.frontActual.match('Crudas')) {
      atributos = this.columnMateriasCrudas;
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

  showModal():void {
    this.flag=!this.flag;
  }

  @Output() lanzarModal = new EventEmitter<void>();

  llamarMetodo(): void {
    this.lanzarModal.emit();
  }

}
