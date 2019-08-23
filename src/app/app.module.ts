import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//para login}
import {  SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider,FacebookLoginProvider } from "angularx-social-login";
//lo demas

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { InicioComponent } from './inicio/inicio.component';
import { IheaderComponent } from './inicio/iheader/iheader.component';
import { IbodyComponent } from './inicio/ibody/ibody.component';
import { EspecialidadComponent } from './especialidad/especialidad.component';
import { EbodyComponent } from './especialidad/ebody/ebody.component';
import { EheaderComponent } from './especialidad/eheader/eheader.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NheaderComponent } from './nosotros/nheader/nheader.component';
import { NbodyComponent } from './nosotros/nbody/nbody.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { CheaderComponent } from './contactanos/cheader/cheader.component';
import { CbodyComponent } from './contactanos/cbody/cbody.component';
import { LheaderComponent } from './login/lheader/lheader.component';
import { LbodyComponent } from './login/lbody/lbody.component';


const config = new AuthServiceConfig([
  // {
  //   id: GoogleLoginProvider.PROVIDER_ID,
  //   provider: new GoogleLoginProvider("761309882279-9gdpl7teu3pm55h217hhnpc50bvspahe.apps.googleusercontent.com")
  // }
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("126510371816-548i3tga1oull84k9jn0eod5bfsjhm09.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("630989510742058")
  }  	
]);
 export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    PerfilComponent,
    UsuarioComponent,
    InicioComponent,
    IheaderComponent,
    IbodyComponent,
    EspecialidadComponent,
    EbodyComponent,
    EheaderComponent,
    NosotrosComponent,
    NheaderComponent,
    NbodyComponent,
    ContactanosComponent,
    CheaderComponent,
    CbodyComponent,
    LheaderComponent,
    LbodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
