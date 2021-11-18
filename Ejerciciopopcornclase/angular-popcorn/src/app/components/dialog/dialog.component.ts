import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie, MoviesPopularResponse } from 'src/app/models/interfaces/movies-popular.interface';
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



@Input() movieInput!: Movie;

  constructor(private moviesService:MoviesService,
  @Inject(MAT_DIALOG_DATA) private data: DialogAddMovieToList) {}

  ngOnInit(): void {
    this.movie = this.data.movie;
  }

  getMovieImageUrl(movie: Movie) {
    return `${environment.imageBaseUrl}${this.data.movie.poster_path}`;
  }

}

