import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaPerfilComponent } from './rutas/ruta-perfil/ruta-perfil.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaMenuComponent } from './rutas/ruta-menu/ruta-menu.component';
import { Ruta404Component } from './rutas/ruta404/ruta404.component';
import { RutaGestioUsuariosComponent } from './rutas/ruta-gestio-usuarios/ruta-gestio-usuarios.component';
import { RutaGestioProductosComponent } from './rutas/ruta-gestio-productos/ruta-gestio-productos.component';
import { RutaCrearProductoComponent } from './rutas/ruta-crear-producto/ruta-crear-producto.component';
import { RutaActualizarProductoComponent } from './rutas/ruta-actualizar-producto/ruta-actualizar-producto.component';
import { RutaCrearUsuarioComponent } from './rutas/ruta-crear-usuario/ruta-crear-usuario.component';
import { RutaActualizarUsuarioComponent } from './rutas/ruta-actualizar-usuario/ruta-actualizar-usuario.component';

@NgModule({
  declarations: [//aquí se declaran los componentes
    AppComponent,
    RutaPerfilComponent,
    RutaInicioComponent,
    RutaLoginComponent,
    RutaMenuComponent,
    Ruta404Component,
    RutaGestioUsuariosComponent,
    RutaGestioProductosComponent,
    RutaCrearProductoComponent,
    RutaActualizarProductoComponent,
    RutaCrearUsuarioComponent,
    RutaActualizarUsuarioComponent
  ],
  imports: [//modulos
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],// servicios
  bootstrap: [AppComponent] //componente principal
})
export class AppModule { }
/*
-> componente principal


* -> inicio
* -> login
* ->menu
      ->gestion de usuarios
      ->gestion de productos
* ->perfil
* ->404 NOt Found
* */
