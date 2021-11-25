import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const AUTH_BASE_URL = 'auth';
const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
   //esto hay q ponerlo dentro del metodo en vez de la cabezera en sustitucion a los de arriba ..../json
    //'Authentication Bearer ': localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authBaseUrl = `${environment.apiBaseUrl}/${AUTH_BASE_URL}`;


  constructor(private http: HttpClient) { }
  
}
