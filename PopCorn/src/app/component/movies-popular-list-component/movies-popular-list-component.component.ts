import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movies-popular-list-component',
  templateUrl: './movies-popular-list-component.component.html',
  styleUrls: ['./movies-popular-list-component.component.css']
})
export class MoviesPopularListComponentComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
  }

 
 
}
