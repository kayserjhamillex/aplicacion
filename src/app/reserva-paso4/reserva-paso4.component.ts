import { Component, OnInit } from '@angular/core';
import { AuthService,SocialUser } from "angularx-social-login";
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reserva-paso4',
  templateUrl: './reserva-paso4.component.html',
  styleUrls: ['./reserva-paso4.component.css']
})
export class ReservaPaso4Component implements OnInit {
  public usuario: SocialUser;
  public loggeIn:boolean;
  DatosForm: FormGroup;
  extrangero=false;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
    this.authService.authState.subscribe((usuario)=>{
      this.usuario=usuario;
      this.loggeIn=(usuario != null);
    })
    this.DatosForm = this.formBuilder.group({
      DNI: new FormControl('00000000',
      [Validators.nullValidator,
      Validators.minLength(8),
      Validators.maxLength(8)]),
      Extrangeria: new FormControl('000000000000',
      [Validators.nullValidator,
      Validators.minLength(12),
      Validators.maxLength(12)]),
      FullName: new FormControl('',
      [Validators.required,
      Validators.minLength(20),
      Validators.maxLength(120)]),
      FNacimiento: new FormControl('dd/MM/yyyy',[Validators.required]),
    });
  }
  datospaciente(datos: any){
    console.log(datos);
  }
  esestrangero(){
    this.extrangero=true;
  }
  noestrangero(){
    this.extrangero=false;
  }

  get FullName() {
    return this.DatosForm.get('FullName');
  }
  get FNacimiento() {
    return this.DatosForm.get('FNacimiento');
  }



}
