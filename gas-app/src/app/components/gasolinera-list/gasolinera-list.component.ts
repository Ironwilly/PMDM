import { Component, OnInit } from '@angular/core';
import { GasolinerasListResponse, ListaEESSPrecio } from 'src/app/models/interfaces/gasolineraList.interface';
import { GasolineraService } from 'src/app/services/gasolinera.service';
import { Provincias } from 'src/app/models/interfaces/provincias';
import { ProvinciasService } from 'src/app/services/provincias.service';

@Component({
  selector: 'app-gasolinera-list',
  templateUrl: './gasolinera-list.component.html',
  styleUrls: ['./gasolinera-list.component.css']
})
export class GasolineraListComponent implements OnInit {

  gasolineraList: ListaEESSPrecio[] = [];
  provincias!: Provincias[];
  idProvincia: string = "";
  gasolinerasFiltradas: ListaEESSPrecio[] = [];
  provinciasSeleccionada: string = "";

  constructor(private gasolineraService: GasolineraService, private provinciasService: ProvinciasService) { }

  ngOnInit(): void {
    this.gasolineraService.getGasolineras().subscribe(resp => {
      let jsonString = JSON.stringify(resp);
      this.gasolineraList = this.gasolineraService.parseAnyToGasolineraListResponse(jsonString);
      this.gasolinerasFiltradas=this.gasolineraList;
      console.log(this.gasolinerasFiltradas)
      console.log(this.gasolineraList);
    });
    this.provinciasService.getProvincias().subscribe(res => {
      this.provincias = res;
    });
   
    this.filtroProvincias();
  }

  getGasolineras() {
    this.gasolineraService.getGasolineras().subscribe(result => {

      this.gasolineraList = result.ListaEESSPrecio;

    });
  }





  filtroProvincias() {
    this.gasolinerasFiltradas = this.gasolineraList.filter(result => result.idProvincia.includes(this.provinciasSeleccionada));
  
    console.log(this.gasolinerasFiltradas)
    console.log(this.provinciasSeleccionada)

  }





}
