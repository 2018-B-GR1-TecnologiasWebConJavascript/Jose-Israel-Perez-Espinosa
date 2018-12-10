import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-gestio-usuarios',
  templateUrl: './ruta-gestio-usuarios.component.html',
  styleUrls: ['./ruta-gestio-usuarios.component.scss']
})
export class RutaGestioUsuariosComponent implements OnInit {
usuarios:Usuario[]=[
  {id:1,
  nombre: 'Israel'},
{id:2,
nombre:'Jose'}

  ];
  constructor() { }

  ngOnInit() {
  }
hola(){
return 'hola';
}

eliminar(usuario: Usuario){
    console.log('Imprimir',usuario);
  const indiceUsuarioEliminar=this.usuarios
      .findIndex((usuarioABuscar)=>{
        return usuarioABuscar.id==usuario.id;
      });
  this.usuarios.splice(indiceUsuarioEliminar,1)
}
}
interface Usuario {
  nombre?: string;//? significa que es opcional
  id?: number;

}
