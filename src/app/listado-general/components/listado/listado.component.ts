import { AfterViewInit, Component, Input } from '@angular/core';
import { Proveedor } from '../../../proveedor/interfaces/proveedor.interface';
import { Cliente } from 'src/app/cliente/interfaces/cliente.interfaces';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  private self: ListadoComponent = this;

  public frontActual = 'Provedor';

  public proveedor: Proveedor = {
    nombre: '',
    telefono_1: '',
    direccion: '',
    ciudad: '',
    estado: '',
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
    codigoCliente: 0,
    identificacion: '',
    nombre: '',
    apellido: '',
    correo: '',
    direccion: '',
    telefono: '',
    ciudad: '',
    estado:''
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


  getAtributos(): string[] {
    let atributos: string[] = [''];
    if (this.frontActual.match('Cliente')) {
      atributos = this.columnCliente;
    } else if (this.frontActual.match('Provedor')) {
      atributos = Object.keys(this.proveedor);
    }

    return atributos;
  }
}
