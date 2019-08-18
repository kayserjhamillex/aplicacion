import { Component, OnInit } from '@angular/core';
import { AuthService,SocialUser } from "angularx-social-login";
import {  GoogleLoginProvider,FacebookLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logeado: boolean = false;
  usuario:SocialUser;
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      if (user) {
        this.logeado=true;
        this.usuario=user;
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

  accederConFacebook(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  } 
 
  Salir(): void {
    this.authService.signOut();
  }

}
