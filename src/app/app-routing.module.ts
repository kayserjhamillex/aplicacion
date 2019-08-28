import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
// import { UsuarioComponent } from './usuario/usuario.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { EspecialidadComponent } from './especialidad/especialidad.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { SelecespecialidadComponent } from './selecespecialidad/selecespecialidad.component';
import { SelececdatetimeComponent } from './selececdatetime/selececdatetime.component';
import { PagoComponent } from './pago/pago.component';
import { BoletaComponent } from './boleta/boleta.component';
import { ReservaPaso1Component } from './reserva-paso1/reserva-paso1.component';
import { ReservaPaso2Component } from './reserva-paso2/reserva-paso2.component';
import { ReservaPaso3Component } from './reserva-paso3/reserva-paso3.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'iniciado', component: PerfilComponent},
  { path: 'login', component: LoginComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'especilidad', component: EspecialidadComponent},
  { path: 'contactanos', component: ContactanosComponent},
  { path: 'reserva', component: SelecespecialidadComponent},
  { path: 'datetime', component: SelececdatetimeComponent},
  { path: 'pago', component: PagoComponent},
  { path: 'boleta', component: BoletaComponent},
  { path: 'reserva/paso1', component: ReservaPaso1Component},
  { path: 'reserva/paso2/:fecha/:tipoId', component: ReservaPaso2Component},
  { path: 'reserva/paso3/:espe/:fecha', component: ReservaPaso3Component}


  //implementado guard
// { path: 'usuario', component: UsuarioComponent,canActivate:[AuthGuardService]},  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
