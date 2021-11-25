import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { People, PersonPopularResponse } from '../models/interfaces/person-pupolar.interface';
import {  PersonResponse } from '../models/person.interface';


const PersonUrl = `${environment.apiBaseUrl}/person`;


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  getPopularPerson(): Observable<PersonPopularResponse> {
    return this.http.get<PersonPopularResponse>(`${PersonUrl}/popular?api_key=${environment.apiKey}&language=${environment.defaultLang}`);
  }

  getPerson(id: string): Observable<PersonResponse> {

    return this.http.get<PersonResponse>(`${PersonUrl}/${id}?api_key=${environment.apiKey}&language=${environment.defaultLang}`)

  }

}
