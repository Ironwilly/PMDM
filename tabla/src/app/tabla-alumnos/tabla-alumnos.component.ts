import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import {ThemePalette} from '@angular/material/core';


export interface TablaAlumnos {
  id: number;
  nombre: string;
  apellidos: string;
  edad: number;
  curso: string;

}




const ALUMNOS_DATA: TablaAlumnos[] = [
  {id: 1, nombre: 'Antonio', apellidos: 'Sánchez López', edad:22,curso: '2DAM'},
  {id: 2, nombre: 'Pedro', apellidos: 'Gallardo García', edad: 28,curso: '1DAM'},
  {id: 3, nombre: 'Luis', apellidos: 'Navarro Duque', edad: 24,curso: '2DAM'},
  {id: 4, nombre: 'Javier', apellidos: 'Fernández Losada', edad: 22,curso: '2DAM'},
  {id: 5, nombre: 'Alfonso', apellidos: 'Granados Lucio', edad: 21,curso: '2DAM'},
  {id: 6, nombre: 'Daniel', apellidos: 'Pérez Mateos', edad: 23,curso: '1DAM'},
  {id: 7, nombre: 'Noelia', apellidos: 'Vega Martín', edad: 27,curso: '2DAM'},
  {id: 8, nombre: 'Ana', apellidos: 'Parra Cano', edad: 32,curso: '2DAM'},
  {id: 9, nombre: 'Francisco', apellidos: 'Solis García', edad: 19,curso: '1DAM'},
  {id: 10, nombre: 'Alvaro', apellidos: 'Segura Villa', edad: 20,curso: '1DAM'},
];

@Component({
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.css']
})
export class TablaAlumnosComponent implements OnInit {

  displayedOriginalColumns: string[] = ['id', 'nombre', 'apellidos', 'edad','curso','action'];
  displayedColumns: string[] = ['id', 'nombre', 'apellidos', 'edad','curso','action'];
  dataSource = ALUMNOS_DATA;




  constructor() {  }

  ngOnInit(): void {
  }


  checkBoxChange(isChecked: boolean, columnNombre: string) {

    if (isChecked){

      this.displayedColumns.splice(this.displayedOriginalColumns.indexOf(columnNombre),0,columnNombre);


    } else{

      this.displayedColumns.splice(this.displayedColumns.indexOf(columnNombre),1);

    }







  }

}


