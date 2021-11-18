import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Movie } from 'src/app/models/interfaces/movies-popular.interface';
import { environment } from 'src/environments/environment';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movieInput!: Movie;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getMovieImageUrl(movie: Movie) {
    return `${environment.imageBaseUrl}${movie.poster_path}`;
  }

  openDialogMovie(id:number | undefined) {
    this.dialog.open(DialogComponent, {
      height: '400px',
      width: '700px',
      data: { movie: this.movieInput}
    });
  }



}
