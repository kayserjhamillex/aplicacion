import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClinicaService {
 especialidad = [
  {id:1,name:'Medicina General', cost:50},
  {id:2,name:'Neumología', cost:150},
  {id:3,name:'Cardiología', cost:80},
  {id:4,name:'Geriatría', cost:90},
  {id:5,name:'Dermatología', cost:120},
  {id:6,name:'Ginecología', cost:40},
  {id:7,name:'Reumatología', cost:70},
  {id:8,name:'Medicina Interna', cost:100},
  {id:9,name:'Endocrinología', cost:80},
  {id:10,name:'Traumatología', cost:90},
  {id:11,name:'Oftalmología', cost:70},
  {id:12,name:'Otorrinolaringología', cost:80},
  {id:13,name:'Cirugia General', cost:140},
  {id:14,name:'Gastroenterología', cost:85},
  {id:15,name:'Urologia', cost:50},
  {id:16,name:'Neurología', cost:180}
];
doctor = [
  {id:1, name:'Medico general1',type:1},
  {id:2, name:'Neurologo',type:2},
  {id:3, name:'Cardiologo',type:3},
  {id:4, name:'Geriatra',type:4},
  {id:5, name:'Dermatologo',type:5},
  {id:6, name:'Ginecologa',type:6},
  {id:7, name:'Reumatologa',type:7},
  {id:8, name:'Internista',type:8},
  {id:9, name:'Endocrinologa',type:9},
  {id:10, name:'Traumatologo',type:10},
  {id:11, name:'Oftalmologo',type:11},
  {id:12, name:'Otorrinolaringologo',type:12},
  {id:13, name:'Cirujano',type:13},
  {id:14, name:'Gastroenterologo',type:14},
  {id:15, name:'Urologo',type:15},
  {id:16, name:'Neurologo',type:16},
  {id:17, name:'Medico general2',type:1},
  {id:18, name:'Medico general3',type:1}
    ];

  cita = [
        {numero:1, fechaCita: '2019-08-29',tipo:4},
        {numero:2, fechaCita: '2019-08-28',tipo:1},
        {numero:3, fechaCita: '2019-08-23',tipo:9},
        {numero:4, fechaCita: '2019-08-27',tipo:4},
        {numero:5, fechaCita: '2019-08-21',tipo:6},
        {numero:6, fechaCita: '2019-08-22',tipo:2},
        {numero:7, fechaCita: '2019-08-28',tipo:7},
        {numero:8, fechaCita: '2019-08-25',tipo:6},
        {numero:9, fechaCita: '2019-08-26',tipo:3},
      ]

  constructor() { }
  ObtenerEspecialidad()
  {
    return this.especialidad;
      
  }
  ObtenerDoctor(){
    return this.doctor;
      
  }
  ObtenerCita()
  {
    return this.cita;
  }

  nuevaCita(citas) {
    this.cita.push(citas);
  }




}
