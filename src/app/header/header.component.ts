import { Component, OnInit } from '@angular/core';
import { AuthService,SocialUser } from "angularx-social-login";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public usuario: SocialUser;
  public loggeIn:boolean;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((usuario)=>{
      this.usuario=usuario;
      this.loggeIn=(usuario != null);
    })
  }

}
