import { AfterViewInit, Component, Input } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';
declare var $: any;

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements AfterViewInit {

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

  constructor(public usuarioService: UsuarioService) {

  }
  ngAfterViewInit() {
    $(document).ready(function() {
      $('.js-check-all').on('click', function() {
        if ( $(self).prop('checked') ) {
          console.log("Hola mundo");
          $('th input[type="checkbox"]').each(function() {
            $(self).prop('checked', true);
            $(self).closest('tr').addClass('active');
          })
        } else {
          $('th input[type="checkbox"]').each(function() {
            $(self).prop('checked', false);
            $(self).closest('tr').removeClass('active');
          })
        }
      });
      $('th[scope="row"] input[type="checkbox"]').on('click', function() {
        if ( $(self).closest('tr').hasClass('active') ) {
          $(self).closest('tr').removeClass('active');
        } else {
          $(self).closest('tr').addClass('active');
        }
      });
    });
  }

  // Funciona porque Dios es grande
  
  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(
      resp=> {
        console.log(resp);
        this.usuarios = resp;
      }
    );
  }
}
