import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthLoginDto, AuthRegistrerDto } from '../models/dto/auth.dto';
import { AuthLoginResponse, AuthRegistrerResponse } from '../models/interfaces/auth.interface';


const AUTH_BASE_URL = 'auth';
const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authBaseUrl = `${environment.apiBaseUrl}/${AUTH_BASE_URL}`;

  constructor(private http: HttpClient) { }

  login(loginDto: AuthLoginDto): Observable<AuthLoginResponse>{

    let requestUrl = `${this.authBaseUrl}/login`;
    return this.http.post<AuthLoginResponse>(requestUrl,loginDto,DEFAULT_HEADERS);

  }
  forgot(){

    let requestUrl = `${this.authBaseUrl}/forgot`;
  }

  registrer(registrerDto: AuthRegistrerDto): Observable<AuthRegistrerResponse>{

    let requestUrl = `${this.authBaseUrl}/signup`;
    return this.http.post<AuthRegistrerResponse>(requestUrl,registrerDto,DEFAULT_HEADERS);


  }


}
