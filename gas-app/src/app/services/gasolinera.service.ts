import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GasolinerasListResponse } from '../models/interfaces/gasolineraList.interface';

@Injectable({
  providedIn: 'root'
})
export class GasolineraService {

  constructor(private http: HttpClient) { }

  getGasolineras(): Observable<any> {
    return this.http.get<any>('https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/');
  }

  parseAnyToGasolineraListResponse(jsonString: string) {
    let jsonStringReplaced = jsonString.replace(/C\.P\./gi, 'cP');
    jsonStringReplaced = jsonStringReplaced.replace(/Dirección/gi, 'direccion');
    jsonStringReplaced = jsonStringReplaced.replace(/Horario/gi, 'horario');
    jsonStringReplaced = jsonStringReplaced.replace(/Latitud/gi, 'latitud');
    jsonStringReplaced = jsonStringReplaced.replace(/Localidad/gi, 'localidad');
    jsonStringReplaced = jsonStringReplaced.replace(/Longitud (WGS84)/gi, 'longitud');
    jsonStringReplaced = jsonStringReplaced.replace(/Municipio/gi, 'municipio');
    jsonStringReplaced = jsonStringReplaced.replace(/Precio Gasoleo A/gi, 'precioGasoleoA');
    jsonStringReplaced = jsonStringReplaced.replace(/Precio Gasoleo B/gi, 'precioGasoleoB');
    jsonStringReplaced = jsonStringReplaced.replace(/Precio Gasolina 95 E5/gi, 'precioGasolina95E5');
    jsonStringReplaced = jsonStringReplaced.replace(/Precio Gasolina 98 E5/gi, 'precioGasolina98E5');
    jsonStringReplaced = jsonStringReplaced.replace(/Provincia/gi, 'provincia');
    jsonStringReplaced = jsonStringReplaced.replace(/Rótulo/gi, 'rotulo');
    jsonStringReplaced = jsonStringReplaced.replace(/IDEESS/gi, 'ideess');
    jsonStringReplaced = jsonStringReplaced.replace(/IDMunicipio/gi, 'idMunicipio');
    jsonStringReplaced = jsonStringReplaced.replace(/IDCCAA/gi, 'idccaa');
    jsonStringReplaced = jsonStringReplaced.replace(/ListaEESSPrecio/gi, 'listaEESSPrecio');

    let jsonFinal: GasolinerasListResponse = JSON.parse(jsonStringReplaced);
    return jsonFinal.listaEESSPrecio;
  }




}

