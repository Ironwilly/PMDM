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
  idProvincia:string="";
  gasolinerasFiltradas: ListaEESSPrecio[] = [];
  gasolineras: any;
  provinciasService: any;






  constructor(private gasolineraService : GasolineraService, provinciasService: ProvinciasService) { }

  ngOnInit(): void {
    this.gasolineraService.getGasolineras().subscribe(resp => {
      let jsonString = JSON.stringify(resp);
      this.gasolineraList = this.gasolineraService.parseAnyToGasolineraListResponse(jsonString);
      console.log(this.gasolineraList);
    });

     this.getProvincias();
  }

  getGasolineras(){
    this.gasolineraService.getGasolineras().subscribe(result =>{

      this.gasolineraList = result.ListaEESSPrecio;

    });
  }



  getProvincias(){
    this.provinciasService.getProvincias().subscribe((result: { Provincias: Provincias[]; }) =>{
      this.provincias=result.Provincias;
    })
  }
  filtroProvincias() {
    this.gasolinerasFiltradas = this.gasolineras.filter((result: { idProvincia: string; }) => result.idProvincia == this.idProvincia);
  }





}
