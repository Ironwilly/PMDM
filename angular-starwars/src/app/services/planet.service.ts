import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanetsListResponse } from '../interfaces/planet';



@Injectable({
  providedIn: 'root'
})
export class PlanetService {




  constructor(private http: HttpClient) { }

  getPlanetList(): Observable<PlanetsListResponse>{
    return this.http.get<PlanetsListResponse>('https://swapi.dev/api/planets');
  }

}
