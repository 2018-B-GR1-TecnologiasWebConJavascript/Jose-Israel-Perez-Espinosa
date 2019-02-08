import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaHomeUsrComponent } from './rutas/ruta-home-usr/ruta-home-usr.component';
import { RutaHomeAdmComponent } from './rutas/ruta-home-adm/ruta-home-adm.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaLoginComponent,
    RutaHomeUsrComponent,
    RutaHomeAdmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
