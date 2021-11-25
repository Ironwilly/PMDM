import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogLoginComponent } from 'src/app/dialogs/dialog-login/dialog-login.component';
import { DialogAddMovieComponent } from 'src/app/dialogs/dialog-add-movie/dialog-add-movie.component';
import { Movie } from 'src/app/models/interfaces/movies-popular.interface';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movieInput!: Movie;

  constructor(private dialog: MatDialog, private authservice: AuthService) { }

  ngOnInit(): void {
  }

  getMovieImageUrl(movie: Movie) {
    return `${environment.imageMovieUrl}${movie.poster_path}`;
  }

  


  



  addToPlayList() {
    if(this.authservice.isLoggedIn()) {
      this.openPlaylistAddDialog();  
    } else {
      this.openLoginDialog();
    }
  }

  openLoginDialog(){
    this.dialog.open(DialogLoginComponent, {
      width: '400px',
      disableClose: true
    });
    
  }

  openPlaylistAddDialog() {
    this.dialog.open(DialogAddMovieComponent, {
      height:'400px',
      width:'300px',
      data: {movieId: this.movieInput?.id}
    })
  }


}
