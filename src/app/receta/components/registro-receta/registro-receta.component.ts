import { Component, EventEmitter, Output } from '@angular/core';
import { Receta } from '../../interfaces/receta.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MateriasPrimasService } from 'src/app/materias/services/materias-primas.service';
import { RecetaService } from '../../services/receta.service';
import { MateriasPrimas } from 'src/app/materias/interfaces/materias-primas.interface';
import { ModalDismissReasons, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-receta',
  templateUrl: './registro-receta.component.html', 
  styleUrls: ['./registro-receta.component.css']
})
export class RegistroRecetaComponent {

  
  closeResult = '';

  public recetaForm: FormGroup;
  public receta: Receta = {
    cod_interno: '',
    desc_mp: '',
    cantidad: 0,
    unidad_medida: '',
    costo_unitario: 0,
    costo_total_unitario: 0
  }
  crudas: MateriasPrimas[]

  constructor(private formBuilder: FormBuilder,private mpService: MateriasPrimasService,
    private recetaService: RecetaService, private router: Router, config: NgbModalConfig,
    private modalService: NgbModal) {
    this.recetaForm = this.formBuilder.group({
      cod_interno: new FormControl(''),
      desc_mp: new FormControl(''),
      cantidad: new FormControl(0),
      unidad_medida: new FormControl(''),
      costo_unitario: new FormControl(0),
      costo_total_unitario: new FormControl(0)
    });
  }

  getMp() {
    return this.mpService.getMateriasPrimas().subscribe(
      (crudas: MateriasPrimas[]) => {
        this.crudas = crudas;
      }
    );
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

  crearReceta(){
    this.recetaService.crearReceta(this.recetaForm.value).subscribe(
      (response) => {
        // Manejar la respuesta exitosa
        console.log('Receta creada:', response);
      }
    );
  }
}
