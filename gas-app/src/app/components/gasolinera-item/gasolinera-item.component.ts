import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ListaEESSPrecio } from 'src/app/models/interfaces/gasolineraList.interface';
import { GasolineraService } from 'src/app/services/gasolinera.service';

@Component({
  selector: 'app-gasolinera-item',
  templateUrl: './gasolinera-item.component.html',
  styleUrls: ['./gasolinera-item.component.css']
})
export class GasolineraItemComponent implements OnInit {

  @Input() gasolineraInput!: ListaEESSPrecio  ;

  constructor(private gasolineraService: GasolineraService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getImagen(rotulo: string)    {
    let img = '';

    if(rotulo == "CEPSA"){
      img = "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0008/3624/brand.gif?itok=JbUoSaz8";
    }if (rotulo == "REPSOL"){
      img = "https://www.pta.es/wp-content/uploads/2020/04/logo-repsol.jpg";
    }if (rotulo == "INPEALSA"){
      img = "https://www.infocif.es/images/logo-empresas/nif-02387561.gif?v=1.01"
    }if (rotulo == "PETROCAMP "){
      img = "https://api.patentes-y-marcas.com/uploads/BOPIBrand_imagen/welcome-petro-open-24-hours-petrocamp-petro-m3607244.jpg"
    }if (rotulo == "PLENOIL"){
      img = "https://plenoil.es/wp-content/uploads/2020/04/logo-plenil-fondo-azul.png"
    }if (rotulo == "BP ROMICA"){
      img = "https://www.somoswaka.com/wp-content/uploads/2017/08/bp-640x320.jpg"
    }if (rotulo == "CARREFOUR"){
      img = "https://empleoytrabajo.org/wp-content/uploads/2015/09/logocarrefour-logo.jpg"
    }if (rotulo == "CARREFOUR"){
      img = "https://cdn.worldvectorlogo.com/logos/campsa-1.svg"
    }
    
    return img;
}
 

  

}
