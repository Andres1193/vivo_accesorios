import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceModalService {

  constructor() { }

  $modal = new EventEmitter<any>();
}
