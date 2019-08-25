import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'ng-select',
  selector: 'app-sebody',
  templateUrl: './sebody.component.html',
  styleUrls: ['./sebody.component.css']
})
export class SebodyComponent implements OnInit {
  // especialidad:string;
  public especialidad;
  public MedicinaGeneral;
  public Neumologia;
  public Cardiologia;
  public Geriatria;
  public Ginecologia;
  public Reumatologia;
  public MedicinaInterna;
  public Endocrinologia;
  public Traumatologia;
  public Oftalmologia;
  public Otorrinolaringologia;
  public CirugiaGeneral;
  public Gastroenterologia;
  public Urologia;
  public Neurologia;
  public Dermatologia;
  public espseleccionada:string = '0';
  public verespseleccionada: string= '';
  
  constructor() { 
    this.especialidad=[
      "-Seleccione Especialidad",
      "MedicinaGeneral",
      "Neumología",
      "Cardiología",
      "Geriatría",
      "Ginecología",
      "Reumatología",
      "Medicina Interna",
      "Endocrinología",
      "Traumatología",
      "Oftalmología",
      "Otorrinolaringología",
      "Cirugia General",
      "Gastroenterología",
      "Urologia",
      "Neurología",
      "Dermatología"
    ];
    this.MedicinaGeneral=["especialista1","especlista2"];
    this.Neumologia=["especialista1","especlista2"];
    this.Cardiologia=["especialista1","especlista2"];
    this.Geriatria=["especialista1","especlista2"];
    this.Ginecologia=["especialista1","especlista2"];
    this.Reumatologia=["especialista1","especlista2"];
    this.MedicinaInterna=["especialista1","especlista2"];
    this.Endocrinologia=["especialista1","especlista2"];
    this.Traumatologia=["especialista1","especlista2"];
    this.Oftalmologia=["especialista1","especlista2"];
    this.Otorrinolaringologia=["especialista1","especlista2"];
    this.CirugiaGeneral=["especialista1","especlista2"];
    this.Gastroenterologia=["especialista1","especlista2"];
    this.Urologia=["especialista1","especlista2"];
    this.Neurologia=["especialista1","especlista2"];
    this.Dermatologia=["especialista1","especlista2"];
  }
  capturar() {
    // Pasamos el valor seleccionado a la variable
    this.verespseleccionada = this.espseleccionada;
}

  ngOnInit() {
  }

}
