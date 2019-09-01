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
hora = 
[
  {Id:1,name: '8:00 am - 8:10 am'},
  {Id:2,name: '8:10 am - 8:20 am'},
  {Id:3,name: '8:20 am - 8:30 am'},
  {Id:4,name: '8:30 am - 8:40 am'},
  {Id:5,name: '8:30 am - 8:40 am'},
  {Id:6,name: '8:40 am - 8:50 am'},
  {Id:7,name: '8:50 am - 9:00 am'},
  {Id:8,name: '9:00 am - 9:10 am'},
  {Id:9,name: '9:10 am - 9:20 am'},
  {Id:10,name: '9:20 am - 9:30 am'},
  {Id:11,name: '9:30 am - 9:40 am'},
  {Id:12,name: '9:40 am - 9:50 am'},
  {Id:13,name: '9:50 am - 10:00 am'},
  {Id:14,name: '10:00 am - 10:10 am'},
  {Id:15,name: '10:10 am - 10:20 am'},
  {Id:16,name: '10:20 am - 10:30 am'},
  {Id:17,name: '10:30 am - 10:40 am'},
  {Id:18,name: '10:40 am - 10:50 am'},
  {Id:19,name: '10:50 am - 11:00 am'},
  {Id:20,name: '11:00 am - 11:10 am'},
  {Id:21,name: '11:10 am - 11:20 am'},
  {Id:22,name: '11:20 am - 11:30 am'},
  {Id:23,name: '11:30 am - 11:40 am'},
  {Id:24,name: '11:40 am - 11:50 am'},
  {Id:25,name: '11:50 am - 12:00 pm'},
  {Id:26,name: '12:00 pm - 12:10 pm'},
  {Id:27,name: '12:10 pm - 12:20 pm'},
  {Id:28,name: '12:20 pm - 12:30 pm'},
  {Id:29,name: '12:30 pm - 12:40 pm'},
  {Id:30,name: '12:40 pm - 12:50 pm'},
  {Id:31,name: '12:50 pm - 1:00 pm'},
  {Id:32,name: '1:00 pm - 1:10 pm'},
  {Id:33,name: '1:10 pm - 1:20 pm'},
  {Id:34,name: '1:20 pm - 1:30 pm'},
  {Id:35,name: '1:30 pm - 1:40 pm'},
  {Id:36,name: '1:40 pm - 1:50 pm'},
  {Id:37,name: '1:50 pm - 2:00 pm'},
  {Id:38,name: '2:00 pm - 2:10 pm'},
  {Id:39,name: '2:10 pm - 2:20 pm'},
  {Id:40,name: '2:20 pm - 2:30 pm'},
  {Id:41,name: '2:30 pm - 2:40 pm'},
  {Id:42,name: '2:40 pm - 2:50 pm'},
  {Id:43,name: '2:50 pm - 3:00 pm'},
  {Id:44,name: '3:00 pm - 3:10 pm'},
  {Id:45,name: '3:10 pm - 3:20 pm'},
  {Id:46,name: '3:20 pm - 3:30 pm'},
  {Id:47,name: '3:30 pm - 3:40 pm'},
  {Id:48,name: '3:40 pm - 3:50 pm'},
  {Id:49,name: '3:50 pm - 4:00 pm'},
  {Id:50,name: '4:00 pm - 4:10 pm'},
  {Id:51,name: '4:10 pm - 4:20 pm'},
  {Id:52,name: '4:20 pm - 4:30 pm'},
  {Id:53,name: '4:30 pm - 4:40 pm'},
  {Id:54,name: '4:40 pm - 4:50 pm'},
  {Id:55,name: '4:50 pm - 5:00 pm'},
  {Id:56,name: '5:00 pm - 5:10 pm'},
  {Id:57,name: '5:10 pm - 5:20 pm'},
  {Id:58,name: '5:20 pm - 5:30 pm'},
  {Id:59,name: '5:30 pm - 5:40 pm'},
  {Id:60,name: '5:40 pm - 5:50 pm'},
  {Id:61,name: '5:50 pm - 6:00 pm'},
  {Id:62,name: '6:00 pm - 6:10 pm'},
  {Id:63,name: '6:10 pm - 6:20 pm'},
  {Id:64,name: '6:20 pm - 6:30 pm'},
  {Id:65,name: '6:30 pm - 6:40 pm'},
  {Id:66,name: '6:40 pm - 6:50 pm'},
  {Id:67,name: '6:50 pm - 7:00 pm'},
  {Id:68,name: '7:00 pm - 7:10 pm'},
  {Id:69,name: '7:10 pm - 7:20 pm'},
  {Id:70,name: '7:20 pm - 7:30 pm'},
  {Id:71,name: '7:30 pm - 7:40 pm'},
  {Id:72,name: '7:40 pm - 7:50 pm'},
  {Id:73,name: '7:50 pm - 8:00 pm'},
  {Id:74,name: '8:00 pm - 8:10 pm'},
  {Id:75,name: '8:10 pm - 8:20 pm'},
  {Id:76,name: '8:20 pm - 8:30 pm'},
  {Id:77,name: '8:30 pm - 8:40 pm'},
  {Id:78,name: '8:40 pm - 8:50 pm'},
  {Id:79,name: '8:50 pm - 9:00 pm'},
  {Id:80,name: '9:00 pm - 9:10 pm'},
  {Id:81,name: '9:10 pm - 9:20 pm'},
  {Id:82,name: '9:20 pm - 9:30 pm'},
  {Id:83,name: '9:30 pm - 9:40 pm'},
  {Id:84,name: '9:40 pm - 9:50 pm'},
  {Id:85,name: '9:50 pm - 10:00 pm'},
  {Id:86,name: '10:00 pm - 10:10 pm'},
  {Id:87,name: '10:10 pm - 10:20 pm'},
  {Id:88,name: '10:20 pm - 10:30 pm'},
  {Id:89,name: '10:30 pm - 10:40 pm'},
  {Id:90,name: '10:40 pm - 10:50 pm'},
  {Id:91,name: '11:00 pm - 11:10 pm'}
]
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
  ObtenerHora(){
    return this.hora;
  }


  ObtenerCita()
  {
    return this.cita;
  }

  nuevaCita(citas) {
    this.cita.push(citas);
  }




}
