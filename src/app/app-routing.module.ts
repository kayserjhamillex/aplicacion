import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { EspecialidadComponent } from './especialidad/especialidad.component';
import { ContactanosComponent } from './contactanos/contactanos.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'iniciado', component: PerfilComponent},
  { path: 'login', component: LoginComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'especilidad', component: EspecialidadComponent},
  { path: 'contactanos', component: ContactanosComponent},
//implementado guard
// { path: 'usuario', component: UsuarioComponent,canActivate:[AuthGuardService]},  

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
