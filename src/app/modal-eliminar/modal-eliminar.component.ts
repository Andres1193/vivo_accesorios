import { Component, OnInit} from '@angular/core';
import { SwitchService } from 'src/app/ServicioModal/switch.service';

@Component({
  selector: 'app-modal-eliminar',
  templateUrl: './modal-eliminar.component.html',
  styleUrls: ['./modal-eliminar.component.css']
})
export class ModalEliminarComponent implements OnInit{

  constructor(private serviceModal: SwitchService){}

  ngOnInit(): void {
      
  }

  cerrarModal(){
    this.serviceModal.$modal.emit(false)
  }

}
