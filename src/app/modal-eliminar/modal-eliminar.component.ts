import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-eliminar',
  templateUrl: './modal-eliminar.component.html',
  styleUrls: ['./modal-eliminar.component.css']
})
export class ModalEliminarComponent implements OnInit{

  modalSwitch: boolean = false;
  constructor(){

  }

  ngOnInit(): void {
      
  }

  openModal(){
    this.modalSwitch = true;
  }
}
