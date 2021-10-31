import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieResponse } from '../models/interfaces/movies-popular.interface';
import { MoviesPopularResponse } from '../models/interfaces/movies-popular.interface';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {



  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<MoviesPopularResponse> {
    return this.http.get<MoviesPopularResponse>(`${environment.apiBaseUrl}/movie/popular?api_key=${environment.apiKey}&language=${environment.defaultLang}`);
  }

  getMovieDetail(movieId: number): Observable<MovieResponse>{
    return this.http.get<MovieResponse>(`${environment.apiBaseUrl}/movie/${movieId}?api_key=${environment.apiKey}&language=${environment.defaultLang}`);



  }



}
