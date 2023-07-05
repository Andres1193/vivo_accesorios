import { Component } from '@angular/core';
import { Receta } from '../../interfaces/receta.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-receta',
  templateUrl: './registro-receta.component.html', 
  styleUrls: ['./registro-receta.component.css']
})
export class RegistroRecetaComponent {
  public recetaForm: FormGroup;
  public receta: Receta = {
    codigo_mp: '',
    descripcion_mp: '',
    cantidad: 0,
    unidad_medida: '',
    costo_unitario: 0,
    costo_total_unitario: 0
  }

  constructor(private formBuilder: FormBuilder) {
    this.recetaForm = this.formBuilder.group({
      codigo_mp:  new FormControl(''),
      cantidad:  new FormControl(0),
      unidad_medida:  new FormControl('')
    });
  }

  // getMp() {
  //   return this.MateriasPrimasService.getMateriasPrimas().subscribe(
  //     (crudas: MateriasPrimas[]) => {
  //       this.crudas = crudas;
  //     }
  //   );
  // }

  crearReceta(){
    
  }
}
