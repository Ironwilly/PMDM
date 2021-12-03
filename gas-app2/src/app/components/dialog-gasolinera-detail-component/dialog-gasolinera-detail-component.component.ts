import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListaEESSPrecio } from 'src/app/models/interfaces/gasolineraList.interface';
import { GasolineraService } from 'src/app/services/gasolinera.service';

export interface DialogGasolineraDetailComponentComponent{
gasolineraId: string;
}

@Component({
  selector: 'app-dialog-gasolinera-detail-component',
  templateUrl: './dialog-gasolinera-detail-component.component.html',
  styleUrls: ['./dialog-gasolinera-detail-component.component.css']
})
export class DialogGasolineraDetailComponentComponent implements OnInit {

  gasolineraInput!: ListaEESSPrecio;

  constructor(@Inject(MAT_DIALOG_DATA) private data: DialogGasolineraDetailComponentComponent, private gasolineraService: GasolineraService ){ }

  ngOnInit(): void {
  }

}
