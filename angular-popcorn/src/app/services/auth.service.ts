import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestTokenResponse ,SessionResponse} from '../models/interfaces/auth.interface';


const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }



  getLocalSessionId() {
    return localStorage.getItem('session_id');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('session_id') != null;
  }

  setLocalSessionId(sessionId: string) {
    localStorage.setItem('session_id', sessionId);
  }

  setLocalRequestToken(token: string) {
    localStorage.setItem('b49cc92ad56a7a482ddc1eebb1f6b7cf35a4420e', token);
  }

  getLocalRequestToken() {
    return localStorage.getItem('b49cc92ad56a7a482ddc1eebb1f6b7cf35a4420e');
  }

  getRequestToken(): Observable<RequestTokenResponse> {
    return this.http.get<RequestTokenResponse>(`${environment.apiBaseUrl}/authentication/token/new?api_key=${environment.apiKey}`);
  }

  getSessionId(): Observable<SessionResponse> {
    return this.http.post<SessionResponse>(`https://api.themoviedb.org/3/authentication/session/new?api_key=${environment.apiKey}`, { request_token: this.getLocalRequestToken()});
  }
}


