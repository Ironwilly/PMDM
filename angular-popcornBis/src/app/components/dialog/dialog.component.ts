import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateDtoList, DtoList, ListadoPelisWilly } from 'src/app/models/interfaces/listado-pelis-willy';
import { MovieResponse } from 'src/app/models/interfaces/movie';
import { Movie } from 'src/app/models/interfaces/movies-popular.interface';
import { AuthService } from 'src/app/services/auth.service';
import { ListaMoviesService } from 'src/app/services/lista-movies.service';
import { MoviesService } from 'src/app/services/movies.service';
import { environment } from 'src/environments/environment';

export interface DialogAddMovieToList{
  movie: any;

  movieId: number;
}


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  movie!: MovieResponse;
  listadelistas: ListadoPelisWilly[]=[];
  dto = new DtoList();
  createdtolist = new CreateDtoList();
  idlista=0;
  listaservice: any;



  constructor(private moviesService:MoviesService,
  @Inject(MAT_DIALOG_DATA) private data: DialogAddMovieToList, private authService: AuthService,
  private listaMoviesService: ListaMoviesService) { }


  ngOnInit(): void {
    this.moviesService.getMovieId(this.data.movieId).subscribe(movieResult =>{
      this.movie = movieResult;
    })
    this.listaservice.getListListas().subscribe((listasResult: { results: ListadoPelisWilly[]; }) =>{
      this.listadelistas=listasResult.results
      console.log(this.listadelistas.length)
    })
  }

  getMovieImageUrl(movie: Movie) {
    return `${environment.imageBaseUrl}${this.data.movie.poster_path}`;
  }

  AddMovie(idmovie:number) {
    console.log(idmovie)
    this.dto.media_id=idmovie;
    this.listaservice.postAddMovieToList(this.idlista,this.dto).subscribe((result: any) =>{
      console.log(this.idlista)
    });
    window.location.reload()
  }

  CreateList() {

    this.listaservice.CreateList(this.createdtolist).subscribe((result: any) =>{
      console.log(result)
    });
    window.location.reload()
  }





}
