import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie, MoviesPopularResponse } from 'src/app/models/interfaces/movies-popular.interface';
import { AuthService } from 'src/app/services/auth.service';
import { MoviesService } from 'src/app/services/movies.service';
import { environment } from 'src/environments/environment';

export interface DialogAddMovieToList{
  movie:Movie;
}

export class FormFieldAppearanceExample {}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
movie!: Movie;
popularMovies: Movie[] = [];



@Input() movieInput!: Movie;

  constructor(private moviesService:MoviesService,
  @Inject(MAT_DIALOG_DATA) private data: DialogAddMovieToList, private authService: AuthService) {}

  ngOnInit(): void {
    this.movie = this.data.movie;
    this.moviesService.getPopularMovies().subscribe(popularMoviesResponse => {
      this.popularMovies = popularMoviesResponse.results;
    });
  }

  getMovieImageUrl(movie: Movie) {
    return `${environment.imageBaseUrl}${this.data.movie.poster_path}`;
  }

  doLogin() {
    this.authService.getRequestToken().subscribe(resp => {

      this.authService.setLocalRequestToken(resp.request_token);
      window.open(`https://www.themoviedb.org/authenticate/${resp.request_token}?redirect_to=http://localhost:4200/loginsuccess`,"_self");

    });

}

}
