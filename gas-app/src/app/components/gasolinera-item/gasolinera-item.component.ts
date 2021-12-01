import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ListaEESSPrecio } from 'src/app/models/interfaces/gasolineraList.interface';
import { GasolineraService } from 'src/app/services/gasolinera.service';
import { DialogGasolineraDetailComponentComponent } from '../dialog/dialog-gasolinera-detail-component/dialog-gasolinera-detail-component.component';

@Component({
  selector: 'app-gasolinera-item',
  templateUrl: './gasolinera-item.component.html',
  styleUrls: ['./gasolinera-item.component.css']
})
export class GasolineraItemComponent implements OnInit {

  @Input() gasolineraInput!: ListaEESSPrecio;

  constructor(
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
    }if (rotulo == "PETROCAMP"){
      img = "https://i.pinimg.com/280x280_RS/45/af/a1/45afa1136ba6fb089c4cf0118bcdcc24.jpg"
    }if (rotulo == "PLENOIL"){
      img = "https://plenoil.es/wp-content/uploads/2020/04/logo-plenil-fondo-azul.png"
    }if (rotulo == "BP ROMICA"){
      img = "https://www.somoswaka.com/wp-content/uploads/2017/08/bp-640x320.jpg"
    }if (rotulo == "CARREFOUR"){
      img = "https://empleoytrabajo.org/wp-content/uploads/2015/09/logocarrefour-logo.jpg"
    }if (rotulo == "CARREFOUR"){
      img = "https://cdn.worldvectorlogo.com/logos/campsa-1.svg"
    }if (rotulo == "ALCAMPO"){
      img = "https://www.parquecomercialtxingudi.com/ka/apps/txingudi/contents/tiendas/logos/20170123_181035_logo-gasolinera-alcampo.jpg"
    }if (rotulo == "NATURGY ES GNV ALBACETE"){
      img = "https://www.naturgy.com/en/filesImagesCOM/Naturgy-ok.jpg"
    }if (rotulo == "FAST & GAS"){
      img = "https://www.fastandgas.com/logo-fast-190.jpg"
    }if (rotulo == "LOS ANGELES DE LA MANCHA"){
      img = "https://scontent.fsvq2-1.fna.fbcdn.net/v/t1.6435-9/109727992_2894538624005778_6321097161154580411_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=973b4a&_nc_ohc=Xd3-7fYwpAMAX_lJglA&_nc_ht=scontent.fsvq2-1.fna&oh=93d8ae0c15ff4293389c882d0b822ce3&oe=61CADDB6"
    }if (rotulo == "SHELL"){
      img = "https://logogratis.com/blog/wp-content/uploads/2017/10/1197594_orig.jpg"
    }if (rotulo == "BP"){
      img = "https://www.somoswaka.com/wp-content/uploads/2017/08/bp-640x320.jpg"
    }
    return img;
}


openGasolineraDetailDialog() {
  this.dialog.open(DialogGasolineraDetailComponentComponent, {
    height: '400px',
    width: '300px',
    data: { gasolineraInput: this.gasolineraInput }
  });
}




}
