import { Component, Input, OnInit } from '@angular/core';
import { ProbandoComponent } from '../probando/probando.component';



@Component({
  selector: 'app-prueba2',
  templateUrl: './prueba2.component.html',
  styleUrls: ['./prueba2.component.css']
})
export class Prueba2Component implements OnInit {

  @Input() tituloInput!: any


  comentario!: string;

  constructor() { }

  ngOnInit(): void {
    this.comentario = "Este es el comentario a probar";



}

}
