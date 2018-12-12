import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {RutaMenuComponent} from "./rutas/ruta-menu/ruta-menu.component";
import {RutaPerfilComponent} from "./rutas/ruta-perfil/ruta-perfil.component";
import {Ruta404Component} from "./rutas/ruta404/ruta404.component";
import {RutaGestioUsuariosComponent} from "./rutas/ruta-gestio-usuarios/ruta-gestio-usuarios.component";
import {RutaGestioProductosComponent} from "./rutas/ruta-gestio-productos/ruta-gestio-productos.component";
import {RutaCrearProductoComponent} from "./rutas/ruta-crear-producto/ruta-crear-producto.component";
import {RutaActualizarProductoComponent} from "./rutas/ruta-actualizar-producto/ruta-actualizar-producto.component";
import {RutaCrearUsuarioComponent} from "./rutas/ruta-crear-usuario/ruta-crear-usuario.component";
import {RutaActualizarUsuarioComponent} from "./rutas/ruta-actualizar-usuario/ruta-actualizar-usuario.component";

const routes: Routes = [//arreglo de rutas tipado

  {
    path: '',
    pathMatch: 'full',

    redirectTo: 'inicio'
  },
  //nombre
  {
    path: 'inicio',

    //componente
    component: RutaInicioComponent
  },
  {
    path: 'login',

    //componente
    component: RutaLoginComponent
  },
  {
    path: 'menu',

    //componente
    component: RutaMenuComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',

        redirectTo: 'gestion-productos'
      },

      {
        path: 'gestion-usuarios',
        component: RutaGestioUsuariosComponent,
        children: [
          {
            path: 'crear-usuario',
            component: RutaCrearUsuarioComponent
          },
          {
            path: 'actualizar-usuario',
            component: RutaActualizarUsuarioComponent
          }
        ]
      },

      {
        path: 'gestion-productos',
        component: RutaGestioProductosComponent,

        children: [
          {
            path: 'crear-producto',
            component: RutaCrearProductoComponent
          },
          {
            path: 'actualizar-producto',
            component: RutaActualizarProductoComponent
          }
        ]

      }

    ]
  },
  {
    path: 'perfil',

    //componente
    component: RutaPerfilComponent
  },
  {
    path: 'no-encontrado',

    //componente
    component: Ruta404Component
  },
  {
    path: '**',

    //componente
    redirectTo: 'no-encontrado'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
