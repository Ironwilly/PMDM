import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PersonPopularResponse } from '../models/interfaces/people-popular';

const personUrl = `${environment.apiBaseUrl}/person`

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }



  getPopularPerson(): Observable<PersonPopularResponse> {
    return this.http.get<PersonPopularResponse>(`${personUrl}/popular?api_key=${environment.apiKey}&language=${environment.defaultLang}`);
  }
}
