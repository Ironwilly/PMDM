import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogMovieDetail, } from 'src/app/dialogs/dialog-movie-detail/dialog-movie-detail.component';
import { Movie } from 'src/app/models/interfaces/movies-popular.interface';

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


  imagenMovie(moviePath: String | undefined) :string{
    if(moviePath){
      let result = `http://image.tmdb.org/t/p/w500/${moviePath}`;
    return result;
    }
    else{
      return '';
    }
  }

  openMovieDetailDialog() {
    this.dialog.open(DialogMovieDetail, {
      height: '400px',
      width: '300px',
      data: { movieId: this.movieInput?.id }
    });
  }

}
