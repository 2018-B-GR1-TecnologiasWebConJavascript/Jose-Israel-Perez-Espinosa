import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";


@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.css']
})
export class RutaLoginComponent implements OnInit {
  username = '';
  password = '';
  passwordServer = '';
  idusr= '';
  rol= '';
  user = [];
 admin='1';
  constructor (
              private httpClient: HttpClient,
              private _router: Router
               ) {
  }

  ngOnInit() {
  }
  onNameKeyUpUsername(event: any) {
    this.username = event.target.value;
  }

  onNameKeyUpPassword(event: any) {
    this.password = event.target.value;
  }

  getLogin() {




    this.httpClient.get(`http://localhost:1337/usuario?correo=${this.username}`).subscribe((data: any[]) => {
      this.user = data;
      this.passwordServer = this.user[0]['clave'];
      this.idusr = this.user[0]['id'];
      console.log(this.idusr);



      this.httpClient.get(`http://localhost:1337/rolesporusuario?iduser=${this.idusr}`).subscribe((data: any[]) => {
        this.user = data;
        this.rol= this.user[0]['idrol'];
      })





        if (this.password === this.passwordServer ){
          if(this.rol===this.admin){
          const ruta= ['localhost:4200/home']
          this._router.navigate(ruta);}

          else{const rutau= ['localhost:4200/','/home_usr']
            this._router.navigate(rutau); }

        } else{
          console.log("Contraseña incorrecta")
        }

      }
    );


  }


}
