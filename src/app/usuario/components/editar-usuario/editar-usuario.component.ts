import { Component } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {

  public usuario: Usuario = {
    nombre: '',
    nom_usuario: '',
    correo: '',
    contrasena: '',
    estado: ''
  };

  constructor(private usuarioService: UsuarioService) {}

  // ngOnInit(): void {
  //   this.usuarioService.getUsuarios(this.usuario).subscribe(resp =>{
  //     this.usuario =  resp[0];
  //     console.log(resp);
  //   });
  // }

  // actualizarUsuario(){
  //   this.usuarioService.actualizarUsuario(this.usuario).subscribe(resp =>{
  //     console.log(resp);
  //   });
  // }
}
