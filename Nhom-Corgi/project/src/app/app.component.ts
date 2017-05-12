import { Component, OnInit } from '@angular/core';
import {LoginService} from './services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public isLoggedin: boolean;
  constructor(private loginService: LoginService, private router: Router){

  }
  ngOnInit(){
    this.isLoggedin = this.loginService.IsLogged();
  }
  Logout(){
    this.loginService.SetLogin(false);
    //alert('Logged out');
    this.router.navigate(['/']);

  }
}
