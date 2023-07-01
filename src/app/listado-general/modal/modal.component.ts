import { Component } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class ModalComponent {
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open<Type>(content: Type): void {
    this.modalService.open(content);
  }


}
