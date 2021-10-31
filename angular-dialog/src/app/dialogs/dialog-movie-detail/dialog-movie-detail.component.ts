import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';



import { MovieItemComponent } from 'src/app/components/movie-item/movie-item.component';
import { MovieResponse } from 'src/app/models/interfaces/movies-popular.interface';
import { Movie, } from 'src/app/models/interfaces/movies-popular.interface';
import { MoviesService } from 'src/app/services/movies.service';
import { environment } from 'src/environments/environment';


export interface DialogMovieDetail {
  movieId: number;
}

@Component({
  selector: 'app-dialog-movie-detail',
  templateUrl: './dialog-movie-detail.component.html',
  styleUrls: ['./dialog-movie-detail.component.css']
})


export class DialogMovieDetail implements OnInit {



  @Input() movieInput!: MovieResponse;
  constructor(@Inject(MAT_DIALOG_DATA) private data: DialogMovieDetail,
  private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovieDetail(this.data.movieId).subscribe(movieResult => {
      this.movieInput = movieResult;
    })




  }


  getMovieImg(): string{

    return `${environment.apiBaseImg}imagenMovie(movieInput?.poster_path)`
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

}


