import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email = '';
  clave = '';
  hide = true;

  constructor() { }

  ngOnInit(): void {
  }


  imprimirLog() {
    
      console.log(this.email,this.clave);
    };
  }




 


