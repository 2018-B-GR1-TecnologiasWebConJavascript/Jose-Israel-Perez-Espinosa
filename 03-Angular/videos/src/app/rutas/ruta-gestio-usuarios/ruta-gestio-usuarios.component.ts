import { Component, OnInit } from '@angular/core';
import {UsuarioServiceService} from "../../servicios/usuario-service.service";

@Component({
  selector: 'app-ruta-gestio-usuarios',
  templateUrl: './ruta-gestio-usuarios.component.html',
  styleUrls: ['./ruta-gestio-usuarios.component.scss']
})
export class RutaGestioUsuariosComponent implements OnInit {

  usuarios = [];

  // Inyeccion de Dependencias
  constructor(
    private readonly _usuarioService: UsuarioServiceService
  ) {

  }

  ngOnInit() {
    // CUANDO ESTA LISTO EL WEB COMPONENT PARA MOSTRARSE
    this.usuarios = this._usuarioService.usuarios;
  }

  eliminar(usuario) {

    this._usuarioService.eliminar(usuario.id);

  }
}
/*
}
interface Usuario {
  nombre?: string;//? significa que es opcional
  id?: number;

}
*/
