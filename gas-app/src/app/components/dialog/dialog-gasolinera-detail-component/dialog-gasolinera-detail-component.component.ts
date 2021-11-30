import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GasolineraService } from 'src/app/services/gasolinera.service';

@Component({
  selector: 'app-dialog-gasolinera-detail-component',
  templateUrl: './dialog-gasolinera-detail-component.component.html',
  styleUrls: ['./dialog-gasolinera-detail-component.component.css']
})
export class DialogGasolineraDetailComponentComponent implements OnInit {

  constructor( ) { }

  ngOnInit(): void {
  }

}
