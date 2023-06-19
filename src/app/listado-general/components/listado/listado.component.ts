import { AfterViewInit, Component, Input } from '@angular/core';
import { Usuario } from '../../../usuario/interfaces/usuario.interface';

declare var $: any;

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  private self: ListadoComponent = this;

  public usuario: Usuario = {
    nombre: '',
    nom_usuario: '',
    correo: '',
    contrasena: '',
    estado: ''
  };

  @Input() usuarios: Usuario[] = [

  ];

  // constructor(public usuarioService: UsuarioService) {

  // }
  
  // ngOnInit(): void {
  //   this.usuarioService.getUsuarios().subscribe(
  //     resp=> {
  //       console.log(resp);
  //       this.usuarios = resp;
  //     }
  //   );
  // }

  // getUsuarios(): void {
  //   this.usuarioService
  //     .getUsuarios()
  //     .subscribe((usuarios) => (this.usuarios = usuarios));
  // }

}
