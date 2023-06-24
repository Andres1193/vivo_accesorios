import { Component, OnInit } from '@angular/core';
import {NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-eliminar',
  templateUrl: './modal-eliminar.component.html',
  styleUrls: ['./modal-eliminar.component.css']
})
export class ModalEliminarComponent implements OnInit{

  constructor(public modal: NgbModal ){

  }

  ngOnInit(): void {
      
  }

}
