import { Injectable } from '@angular/core';
import { Especialidad } from './especialidad.model';
import { Hora } from './hora.model';
import { Horario } from './horario.model';
import { Doctor } from './doctor.model';
import { Secretaria } from './secretaria.model';
import { Paciente } from './paciente.model';
import { Cita } from './cita.model';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
formData1:Especialidad;
formData2:Hora;
formData3:Horario;
formData4:Doctor;
formData5:Secretaria;
formData6:Paciente;
formData7:Cita;
  constructor() { }
}
