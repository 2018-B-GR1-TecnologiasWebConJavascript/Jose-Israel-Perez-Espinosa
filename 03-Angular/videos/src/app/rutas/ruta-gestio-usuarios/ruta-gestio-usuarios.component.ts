import { Component, OnInit } from '@angular/core';
import {UsuarioServiceService} from "../../servicios/usuario-service.service";

@Component({
  selector: 'app-ruta-gestio-usuarios',
  templateUrl: './ruta-gestio-usuarios.component.html',
  styleUrls: ['./ruta-gestio-usuarios.component.scss']
})
export class RutaGestioUsuariosComponent implements OnInit {
  usuarios= [] ;

  constructor(private readonly _usuarioService: UsuarioServiceService) {
  }

  ngOnInit() {
    this.usuarios=this._usuarioService.usuarios;
  }
  eliminar(usuario){
    console.log('Imprimir',usuario);
    const indiceUsuarioEliminar=this.usuarios
      .findIndex((usuarioABuscar)=>{
        return usuarioABuscar.id==usuario.id;
      });
    this.usuarios.splice(indiceUsuarioEliminar,1)
  }

}
/*
}
interface Usuario {
  nombre?: string;//? significa que es opcional
  id?: number;

}
*/
