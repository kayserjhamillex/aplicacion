import { Component, OnInit } from '@angular/core';
import { ClinicaService } from '../clinica.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserva-paso1',
  templateUrl: './reserva-paso1.component.html',
  styleUrls: ['./reserva-paso1.component.css']
})
export class ReservaPaso1Component implements OnInit {
  Especialidad: any[];
  Doctor: any[];
  reservaForm: FormGroup;


  constructor(
    private clinicaService: ClinicaService,
    //importacion de formulario angular
    private formBuilder: FormBuilder,
    //importacion para ruteo
    private ruoter: Router,
    ) { }

  ngOnInit() {
    this.Especialidad=this.clinicaService.ObtenerEspecialidad();
    this.Doctor=this.clinicaService.ObtenerDoctor();
    this.reservaForm=this.formBuilder.group(
      {
        tipo:'',
        dia:''
      }
    );
  }
  buscarDoctorDisponible(datos) {
    console.log(datos);
    const fecha = new Date(datos.dia);
    this.ruoter.navigate([
      'reserva',
      'paso2',
      fecha.getTime(),
      datos.tipo
    ]);
  }
}
