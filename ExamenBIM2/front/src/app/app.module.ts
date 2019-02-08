import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import {HttpClientModule} from "@angular/common/http";
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';


import { RutaHomeUserComponent } from './rutas/ruta-home-user/ruta-home-user.component';
import {Router, RouterModule} from "@angular/router";
import {AppRoutingModule, RUTAS} from "./app-routing.module";



@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot( RUTAS)
  ],
  declarations: [
    AppComponent,
    RutaLoginComponent,
    RutaHomeComponent,
    RutaHomeUserComponent,


  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(RUTAS: Router) {
    // Use a custom replacer to display function names in the route configs
    // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
