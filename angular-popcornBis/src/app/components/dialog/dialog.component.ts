import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie, MoviesPopularResponse, Playlist } from 'src/app/models/interfaces/movies-popular.interface';
import { AuthService } from 'src/app/services/auth.service';
import { MoviesService } from 'src/app/services/movies.service';
import { environment } from 'src/environments/environment';

export interface DialogAddMovieToList{
  movie:Movie;
}


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  movie!: Movie;
  playlist: Playlist [] = [];
  @Input() movieInput!: Movie;

  constructor(private moviesService:MoviesService,
  @Inject(MAT_DIALOG_DATA) private data: DialogAddMovieToList, private authService: AuthService) { }

  ngOnInit(): void {
  }

  getMovieImageUrl(movie: Movie) {
    return `${environment.imageBaseUrl}${this.data.movie.poster_path}`;
  }

  



}
