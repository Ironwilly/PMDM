import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Provincias } from '../models/interfaces/provincias';



@Injectable({
  providedIn: 'root'
})
export class ProvinciasService {


  constructor(private http:HttpClient) { }

  getProvincias(): Observable<Provincias[]>{
    return this.http.get<Provincias[]>(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/Provincias/`);
  }


}






