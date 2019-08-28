import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClinicaService } from '../clinica.service';

@Component({
  selector: 'app-reserva-paso3',
  templateUrl: './reserva-paso3.component.html',
  styleUrls: ['./reserva-paso3.component.css']
})
export class ReservaPaso3Component implements OnInit {
  especialistaen;
  doctor;
  pago = false;
  fechaCita;
  constructor( 
    private route: ActivatedRoute,
    private clinicaService :ClinicaService,) { }

  ngOnInit() {
    this.especialistaen = this.route.snapshot.params['espe'];
    this.fechaCita = this.route.snapshot.params['fecha'];
    let especialista = this.clinicaService.ObtenerDoctor();
    for (const docto of especialista) {
      if (docto.id === this.especialistaen) {
        this.doctor = docto;
      }
    }
  }
  pagar() {
    //coneccion a la pasarela de pago
    //actualizar el backend
    this.clinicaService.nuevaCita(
      {
        numero:9,
         fechaCita: new Date(+this.fechaCita).toISOString().substring(0,10),
         tipo:this.doctor.id
      }
    )
    this.pago = true;
  }
}
