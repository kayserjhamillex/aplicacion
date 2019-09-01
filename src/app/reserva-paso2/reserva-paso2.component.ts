import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClinicaService } from '../clinica.service';
// import { TIMEOUT } from 'dns';

@Component({
  selector: 'app-reserva-paso2',
  templateUrl: './reserva-paso2.component.html',
  styleUrls: ['./reserva-paso2.component.css']
})
export class ReservaPaso2Component implements OnInit {
 reserva: any[];
  dia;
  tipo;
  fechaCita;
  doctordisponible: any[];
  constructor(
    private route: ActivatedRoute,
    private clinicaService :ClinicaService,
    private router: Router,
  ) { }

  ngOnInit() {
    let fecha = this.route.snapshot.params['fecha'];
    // let hora = this.route.snapshot.params['hora'];
    this.tipo = this.route.snapshot.params['tipoId'];
    this.fechaCita = new Date(+fecha);
    // this.horacita=new TIMEOUT(+hora)
    this.reserva = this.clinicaService.ObtenerCita();
    this.BuscarDoctor();
    // console.log()
  }
  BuscarDoctor(){
    let dianodisponible = []
    console.log(this.fechaCita);
    const fechaIniciobusqueda = this.fechaCita;
    const fechaFinalbusqueda = this.addDays(fechaIniciobusqueda,1);
    for( const citas of this.reserva){
      const fechaInicio = new Date(citas.fechaCita);
      const fechaFin = this.addDays(fechaInicio,1);
      // console.log("------------");
      // console.log(fechaIniciobusqueda,fechaFinalbusqueda);
      // console.log(fechaInicio,fechaFin);
      // console.log("------------");
      if (fechaFin.getTime() >= fechaIniciobusqueda.getTime()
        && fechaInicio.getTime() < fechaFinalbusqueda.getTime()) {
        dianodisponible.push(citas.numero);
        // console.log("no disponible");   
      }
      // console.log("------------");       
    }
    // console.log(dianodisponible);
    //buscar horas disponibles disponibles
  let todosDoctores = this.clinicaService.ObtenerDoctor();
  // let todashoras = this.clinicaService.ObtenerCita();
  console.log(todosDoctores);
  let disponibles = [];
  for (const doctor of todosDoctores){
    const o = dianodisponible.filter(n => n == doctor.id).length;
    if (o === 0 && doctor.type == this.tipo) {
      disponibles.push(doctor);
    }
  }
  console.log(disponibles);
  this.doctordisponible = disponibles;
}

checkout(medico: any) {
  this.router.navigate([
    'reserva',
    'paso3',
    medico.id,
    this.fechaCita.getTime()
  ])
}


//     BuscarHoraDiponible(){
//       let horanodisponible = [];
//       const horaIniciobusqueda = this.fechaCita;
//       const horaFinalbusqueda = new Date();
//       for( const citas of this.reserva){
//         const horaInicio = new Date(citas.fechaCita);
//         const horaaFin = new Date();
// //parametro para obtener hora y minutos es 
// //new Date(parametro hora, parametro minutos)

//         // const horainicio = new Date(citas.horacita);
//         // const horafin = new Date();
//         if (horaFin <= horaIniciobusqueda
//           && horaFin > horaFinalbusqueda) {
//             horanodisponible.push(citas.numero);
        
//         }
//         // if (fecha <= this.horacita) {
           
//         // }          
//           }
//       }
  private addDays(date: Date,days:number):Date{
    let result = new Date(date);
    result.setDate(result.getDate()+days);
    return result;
    // date.setDate(date.getDate()+days);
    // return date;
  }

  
  }




