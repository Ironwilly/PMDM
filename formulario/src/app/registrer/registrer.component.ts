import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.component.html',
  styleUrls: ['./registrer.component.css']
})
export class RegistrerComponent implements OnInit {

  email = '';
  clave = '';
  usuario = '';
  hide = true;

  constructor() { }

  ngOnInit(): void {
  }

  imprimirLog() {
    
    console.log(this.email,this.clave);
  };

}
