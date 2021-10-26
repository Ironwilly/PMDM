import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';P


const urlBaseMovies = `${environment.apiBaseUrl}`;


@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {

  constructor() { }

    getPeliculasPopulares() {
      let url = `${urlBaseMovies}/popular?api_key=${environment.apiKey}`;
    }
  
    getOtraCosa() {
      let url = `${urlBaseMovies}/details?api_key=${environment.apiKey}`;
    }
}


