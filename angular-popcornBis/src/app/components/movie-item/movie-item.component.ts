import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Movie } from 'src/app/models/interfaces/movies-popular.interface';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogLoginComponent } from '../dialogLogin/dialogLogin.component';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movieInput!: Movie;

  constructor(private dialog: MatDialog, private authService: AuthService) { }

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

  addToPlayList() {
    if(this.authService.isLoggedIn()) {
      this.openPlaylistAddDialog();  
    } else {
      this.openLoginDialog();
    }
  }

  openLoginDialog() {
    this.dialog.open(DialogLoginComponent, {
      width: '400px',
      disableClose: true
    });
  }

  openPlaylistAddDialog() {
    this.dialog.open(DialogComponent,{
      width: '400px',
      disableClose: true
    });
    

  }

}
