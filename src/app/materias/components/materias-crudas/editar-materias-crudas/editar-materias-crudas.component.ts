import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MateriasPrimas } from 'src/app/materias/interfaces/materias-primas.interface';
import { MateriasPrimasService } from 'src/app/materias/services/materias-primas.service';
import { Proveedor } from 'src/app/proveedor/interfaces/proveedor.interface';
import { ProveedorService } from 'src/app/proveedor/services/proveedor.service';

@Component({
  selector: 'app-editar-materias-crudas',
  templateUrl: './editar-materias-crudas.component.html',
  styleUrls: ['./editar-materias-crudas.component.css']
})
export class EditarComponentMateriasCrudas {
  public idMp:number = 0;
  
  proveedores: Proveedor[] = [];
  public materiaCrudasForm: FormGroup;
  public materiasCrudas: MateriasPrimas = {
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
    estado: ''
  }
  opciones: Proveedor[];

  ngOnInit(): void {
    this.getProveedores();
  }


  // opcionSeleccionadaProveedor: string = '';

  // seleccionarOpcionProveedor(opcion: string): void {
  //   this.opcionSeleccionadaProveedor = opcion;
  // }


  constructor(private formBuilder: FormBuilder, private mpService: MateriasPrimasService,
    private proveedorService: ProveedorService) {
    this.materiaCrudasForm = this.formBuilder.group({
      cod_interno: new FormControl(''),
      tipo_materia_prima: new FormControl(''),
      desc_mp: new FormControl(''),
      cant_linea: new FormControl(''),
      precio_linea: new FormControl(0),
      unidad_medida: new FormControl(''),
      costo_unitario: new FormControl(0),
      costo_total_unitario: new FormControl(0),
      costo_banio_linea: new FormControl(0),
      cantidad_banada: new FormControl(0),
      costo_banio_un: new FormControl(0),
      bodega: new FormControl(''),
      stock: new FormControl(''),
      estado: new FormControl('Activo'),
      nomProveedor: new FormControl(''),
      opcionSeleccionada: new FormControl(null)

    });
  }

  getProveedores() {
    return this.proveedorService.getProveeedores().subscribe(
      (proveedores: Proveedor[]) => {
        this.proveedores = proveedores;
        this.opciones = this.proveedores;
      }
    );
  }

  actualizarMateriasCrudas(){
    this.materiaCrudasForm.value.nomProveedor = this.materiaCrudasForm.value.opcionSeleccionada.nombre
    this.mpService.actualizarMateriasPrimas(this.idMp,this.materiaCrudasForm.value).subscribe(
      (response) => {
        // Manejar la respuesta exitosa
        console.log('Materia prima actualizada:', response);
      }
      // (error) => {
      //   // Manejar el error
      //   console.error('Error al crear el producto:', error);
      // }
    );
  }

    //Seleccionar una imagen;
    url: any;
    msg = "";
  

  selectFile(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'Debe seleccionar una imagen';
      return;
    }

    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.msg = "Solo soporta imagenes";
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.msg = "";
      this.url = reader.result;
    }
  }

}
