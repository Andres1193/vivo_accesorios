import { Component, OnInit } from '@angular/core';
import { ServiceModalService } from '../serviciosModal/service-modal.service';

@Component({
  selector: 'app-modal-eliminar',
  templateUrl: './modal-eliminar.component.html',
  styleUrls: ['./modal-eliminar.component.css']
})
export class ModalEliminarComponent implements OnInit{

  
  ngOnInit(): void {
      
  }

  constructor(private modalService: ServiceModalService){

  }

  cerrarModal(){
    this.modalService.$modal.emit(false);
  }

  

  
}
