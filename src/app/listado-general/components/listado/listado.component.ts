import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Proveedor } from '../../../proveedor/interfaces/proveedor.interface';
import { Cliente } from 'src/app/cliente/interfaces/cliente.interfaces';
import { Producto } from 'src/app/producto/interfaces/producto.interface';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Receta } from 'src/app/receta/interfaces/receta.interface';
import { Pedido } from 'src/app/pedido/interfaces/pedido.interface';
import { ProveedorService } from 'src/app/proveedor/services/proveedor.service';
import { ClienteService } from 'src/app/cliente/services/cliente.service';

import { MateriasPrimas } from 'src/app/materias/interfaces/materias-primas.interface';
import { MateriasPrimasService } from 'src/app/materias/services/materias-primas.service';
import { Categoria } from '../../../producto/interfaces/categoria.interface';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
  providers: [NgbModalConfig, NgbModal],
})

export class ListadoComponent {



  constructor(config: NgbModalConfig, private modalService: NgbModal,
    private proveedorService: ProveedorService,  private clienteService: ClienteService,
    private MateriasPrimasService: MateriasPrimasService) {
    config.backdrop = 'static';
    config.keyboard = false;

  }

  public listados: any[] = [];

  open<Type>(content: Type): void {
    this.modalService.open(content);
  }

  public opcion = '';

  public isCollapsed = true;

  public frontActual: string = '';

  flagContent: boolean = false;

  flag = true;

  searchItem: string = '';

  ngOnInit(): void {
    this.getProveedores();
    this.getClientes();
    this.getMp();
  }

  public noLeidos: string[] = ['No hay stock en primas', 'Ya no queda espacio en listas'];
  public mensajes: string[] = ['Se ha ingresado algo', 'Ya casi se termina'];

  public proveedor: Proveedor = {
    cod_proveedor: '',
    nombre: '',
    telefono_1: '',
    direccion: '',
    ciudad: '',
    estado: 'Activo',
  };

  @Input() proveedores: Proveedor[] = [];

  getProveedores() {
    return this.proveedorService.getProveeedores().subscribe(
      (proveedores: Proveedor[]) => {
        this.proveedores = proveedores;

      }
    );
  }

  getClientes() {
    return this.clienteService.getClientes().subscribe(
      (clientes: Cliente[]) => {
        this.clientes = clientes;


      }
    );
  }

  getMp() {
    return this.MateriasPrimasService.getMateriasPrimas().subscribe(
      (crudas: MateriasPrimas[]) => {
        this.crudas = crudas;
      }
    );
  }

  getPropiedades(objecto: any) {
    const keys = Object.keys(objecto);
    return keys.slice(1, keys.length - 1);
  }

  imprimirListados(){
    if (this.frontActual.match('Cliente')) {
      this.listados = this.clientes;
    } else if (this.frontActual.match('Provedor')) {
      this.listados = this.proveedores;
    }
    // else if (this.frontActual.match('Producto')) {
    //   listados = this.columnProducto;
    // } else if (this.frontActual.match('Receta')) {
    //   listados = this.columnReceta;
    // } else if (this.frontActual.match('Pedido')) {
    //   listados = this.columnPedido;
    // }
    else if (this.frontActual.match('Crudas')) {
      this.listados = this.crudas;
    }


  }

  public columnProveedor: string[] = [
    'Codigo',
    'Nombre',
    'telefono_1',
    'telefono_2',
    'telefono_3',
    'telefono_4',
    'telefono_5',
    'Dirección',
    'Ciudad',
  ];

  public cliente: Cliente = {
    identificacion: '',
    nombres: '',
    apellidos: '',
    correo: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    estado: 'Activo'
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

  public categoria: Categoria = {
    codigoCategoria: 0,
    desc_categoria: '',
    estado: 'Activo'
  }

  public producto: Producto = {
    idProducto: 0,
    codigoProducto: '',
    nombre: '',
    costo_Producto: 0,
    porcent_Utilidad: 0,
    precio_Producto: 0,
    estado: 'Activo',
    stock: 0,
    idPedido: '', // TODO: acceder a la base de datos para consultar el pedido
    categoria: this.categoria
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
    cod_interno: '',
    desc_mp: '',
    cantidad: 0,
    unidad_medida: '',
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


  public cruda: MateriasPrimas = {
    cod_interno: '',
    tipo_materia_prima: '',
    desc_mp: '',
    cant_linea: 0,
    precio_linea: 0,
    unidad_medida: '',
    costo_unitario: 0,
    costo_total_unitario: 0,
    costo_banio_linea: 0,
    cantidad_banada: 0,
    costo_banio_un: 0,
    bodega: '',
    stock: 0,
    nomProveedor: '',
    estado: 'Activo'
  }

  @Input() crudas: MateriasPrimas[] = [];

  public columnMateriasCrudas: string[] = [
    'Código Materia prima',
    'Tipo de Materia Prima',
    'Descripcion',
    'Cantidad Linea',
    'Precio Linea',
    'Unidad de Medida',
    'Costo Unitario',
    'Costo Total Unitario',
    'Cantidad de Baño de Línea',
    'Cantidad bañada',
    'Costo Baño Unitario',
    'Bodega',
    'Stock',
    'Proveedor'
  ];

  selectLista(name: string): void {
    this.frontActual = name;
    if (this.opcion != "") {
      this.showCreate("");
    }
    this.imprimirListados();
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

  showModal(): void {
    this.flag = !this.flag;
  }

  @Output() lanzarModal = new EventEmitter<void>();

  llamarMetodo(): void {
    this.lanzarModal.emit();
  }

}
