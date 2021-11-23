import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/interfaces/movies-popular.interface';
import { AuthService } from 'src/app/services/auth.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-dialogLogin',
  templateUrl: './dialogLogin.component.html',
  styleUrls: ['./dialogLogin.component.css']
})
export class DialogLoginComponent implements OnInit {
movie!: Movie;
popularMovies: Movie[] = [];

@Input() movieInput!: Movie;

  constructor(private router: Router,
    private authService: AuthService) {}

  ngOnInit(): void {
   
  }


  doLogin() {
    this.authService.getRequestToken().subscribe(resp => {

      this.authService.setLocalRequestToken(resp.request_token);
      window.open(`https://www.themoviedb.org/authenticate/${resp.request_token}?redirect_to=http://localhost:4200/loginsuccess`,"_self");

    });
 

}


}