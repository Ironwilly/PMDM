import { Component, OnInit } from '@angular/core';
import { ListaEESSPrecio } from 'src/app/models/interfaces/gasolineraList.interface';
import { GasolineraService } from 'src/app/services/gasolinera.service';

@Component({
  selector: 'app-gasolinera-list',
  templateUrl: './gasolinera-list.component.html',
  styleUrls: ['./gasolinera-list.component.css']
})
export class GasolineraListComponent implements OnInit {

  gasolineraList: ListaEESSPrecio[] = [];


  constructor(private gasolineraService : GasolineraService) { }

  ngOnInit(): void {
    this.gasolineraService.getGasolineras().subscribe(resp => {
      this.gasolineraList = this.gasolineraService.parseAnyToGasolineraListResponse(resp);
      console.log(this.gasolineraList);
    });
  }

  getGasolineras(){
    this.gasolineraService.getGasolineras().subscribe(result =>{

      this.gasolineraList = result.ListaEESSPrecio;

    });
  }

}
