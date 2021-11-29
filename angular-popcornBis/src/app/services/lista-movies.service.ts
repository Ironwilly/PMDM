import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateDtoList, DtoList, DtoListResponse, ListaDeListas, ListadoPelisWilly } from '../models/interfaces/listado-pelis-willy';




const movieUrl = `${environment.apiBaseUrl}/movie`;
const session_id = localStorage.getItem('session_id');
const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ListaMoviesService {

  constructor(private http: HttpClient) { }

  getListListas(): Observable<ListaDeListas> {
    return this.http.get<ListaDeListas>(`${environment.apiBaseUrl}/account/{account_id}/lists?api_key=${environment.apiKey}&language=${environment.defaultLang}&session_id=${session_id}&page=1`);
  }

  AddMovieToList(idList:number, Dto:DtoList): Observable<ListadoPelisWilly[]> {
    return this.http.post<ListadoPelisWilly[]>(`${environment.apiBaseUrl}/list/${idList}/add_item?api_key=${environment.apiKey}&session_id=${session_id}`, Dto, DEFAULT_HEADERS);
}



  CreateList(Dto: CreateDtoList): Observable<DtoListResponse>{
  return this.http.post<DtoListResponse>(`${environment.apiBaseUrl}/list?api_key=${environment.apiKey}&session_id=${session_id}`, Dto, DEFAULT_HEADERS)
}



}
