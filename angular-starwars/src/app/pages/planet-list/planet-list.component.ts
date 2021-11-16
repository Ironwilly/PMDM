import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/interfaces/planet';

import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {
  planetList: Planet[] = [];

  constructor(private planetService : PlanetService) { }

  ngOnInit(): void {
    this.planetService.getPlanetList().subscribe(resultado =>{
      this.planetList = resultado.results;
    });
  }

}
