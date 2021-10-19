import { Component, OnInit } from '@angular/core';
import { AuthRegistrerDto } from '../models/dto/auth.dto';
import { AuthService } from '../services/auth.service';

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

  registrerDto = new AuthRegistrerDto();



  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }


  doRegistrer(){

    this.authService.registrer(this.registrerDto).subscribe(() =>{

      alert(`Registro exitoso! `);
    })


  }



}
