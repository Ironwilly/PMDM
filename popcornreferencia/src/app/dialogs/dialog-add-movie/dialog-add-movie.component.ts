import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateDtoList, DtoList, ListaDeListas, ListaDePeliculasJucarlox } from 'src/app/models/interfaces/lista-peliculas-jucarlox.interface';
import { MovieResponse } from 'src/app/models/movie.interface';
import { ListaMoviesService } from 'src/app/services/lista-movies.service';

import { MoviesService } from 'src/app/services/movies.service';

export interface DialogMovieDetailData{
  movieId: number;
}


@Component({
  selector: 'app-dialog-movie-detail',
  templateUrl: './dialog-add-movie.component.html',
  styleUrls: ['./dialog-add-movie.component.css']
})



export class DialogAddMovieComponent implements OnInit {
  movie!: MovieResponse;
  listadelistas: ListaDePeliculasJucarlox[]=[];
  dto = new DtoList();
  createdtolist = new CreateDtoList();
  idlista=0;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: DialogMovieDetailData,
    private moviesService: MoviesService,
    private listaservice: ListaMoviesService) { }

  ngOnInit(): void {

    this.moviesService.getMovieId(this.data.movieId).subscribe(movieResult =>{
      this.movie = movieResult;
    })
    this.listaservice.getListListas().subscribe(listasResult =>{
      this.listadelistas=listasResult.results
      console.log(this.listadelistas.length)
    })

  }

  postAddMovie(idmovie:number) {
    console.log(idmovie)
    this.dto.media_id=idmovie;
    this.listaservice.postAddMovieToList(this.idlista,this.dto).subscribe(result =>{
      console.log(this.idlista)
    });
    window.location.reload()
  }



  postCreateList() {
    
    this.listaservice.postCreateList(this.createdtolist).subscribe(result =>{
      console.log(result)
    });
    window.location.reload()
  }

}
