import { Component } from '@angular/core';
import { Receta } from '../../interfaces/receta.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MateriasPrimasService } from 'src/app/materias/services/materias-primas.service';
import { RecetaService } from '../../services/receta.service';
import { MateriasPrimas } from 'src/app/materias/interfaces/materias-primas.interface';

@Component({
  selector: 'app-registro-receta',
  templateUrl: './registro-receta.component.html', 
  styleUrls: ['./registro-receta.component.css']
})
export class RegistroRecetaComponent {
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
    private recetaService: RecetaService) {
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

  crearReceta(){
    this.recetaService.crearReceta(this.recetaForm.value).subscribe(
      (response) => {
        // Manejar la respuesta exitosa
        console.log('Receta creada:', response);
      }
    );
  }
}
