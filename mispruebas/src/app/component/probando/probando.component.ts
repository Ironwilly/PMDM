import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-probando',
  templateUrl: './probando.component.html',
  styleUrls: ['./probando.component.css']
})
export class ProbandoComponent implements OnInit {

  titulo!: string;

  constructor() {




   }

  ngOnInit(): void {

    this.titulo = "Estoy probando este parrafo"


  }

}
