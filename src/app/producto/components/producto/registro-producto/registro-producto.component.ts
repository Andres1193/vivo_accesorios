import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  NgbModalConfig,
  NgbModal,
  ModalDismissReasons,
} from '@ng-bootstrap/ng-bootstrap';
import { Categoria } from 'src/app/producto/interfaces/categoria.interface';
import { Producto } from 'src/app/producto/interfaces/producto.interface';
import { ProductoService } from 'src/app/producto/services/producto.service';

@Component({
  selector: 'app-registro-producto',
  templateUrl: './registro-producto.component.html',
  styleUrls: ['./registro-producto.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class RegistroComponentProducto {
  public productoForm: FormGroup;

  closeResult = '';

  public categoria: Categoria;

  public producto: Producto = {
    idProducto: 0,
    codigoProducto: '',
    nombre: '',
    costo_Producto: 0,
    porcent_Utilidad: 0,
    precio_Producto: 0,
    stock: 0,
    estado: 'Activo',
    categoria: {
      codigoCategoria: 0,
      desc_categoria: '',
      estado: 'Activo',
    },
  };

  constructor(
    private formBuilder: FormBuilder,
    private productoService: ProductoService,
    private router: Router,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    this.productoForm = this.formBuilder.group({
      codigoProducto: ['', Validators.required],
      nombre: ['', Validators.required],
      costo_Producto: [0, Validators.required],
      porcent_Utilidad: [0, Validators.required],
      precio_Producto: [0, Validators.required],
    });
  }

  flag = true;

  open<Type>(content: Type): void {
    const modalRef = this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      windowClass: 'modal-lg', // Agrega aquí la clase personalizada
    });

    modalRef.result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  showModal(): void {
    this.flag = !this.flag;
  }

  @Output() lanzarModal = new EventEmitter<void>();

  llamarMetodo(): void {
    this.lanzarModal.emit();
  }

  crearProducto() {
    if (this.productoForm.valid) {
      // Acciones para crear el producto utilizando this.producto
    }
  }

  cancelar() {
    //this.router.navigate(['/home']);
  }

  //Seleccionar una imagen;
  url: any;
  msg = '';

  selectFile(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'Debe seleccionar una imagen';
      return;
    }

    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.msg = 'Solo soporta imagenes';
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.msg = '';
      this.url = reader.result;
    };
  }
}
