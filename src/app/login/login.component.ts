import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import {  GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logeado: boolean = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      if (user) {
        this.logeado=true;
      }
      else
      {
        this.logeado=false;
      }
    });
  }
   accederConGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
 
  Salir(): void {
    this.authService.signOut();
  }

}
