import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  
  hide = true;

  loginDto = new AuthLoginDto();


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  doLogin(){

    this.authService.login(this.loginDto).suscribe(loginResult => {

      alert(`Has conseguido logarte, y tu token es ${loginResult.token}`)
    });
  }
  
  }




 


