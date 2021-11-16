import { Component, Input, OnInit } from '@angular/core';
import { Planet } from 'src/app/interfaces/planet';

@Component({
  selector: 'app-planet-item',
  templateUrl: './planet-item.component.html',
  styleUrls: ['./planet-item.component.css']
})
export class PlanetItemComponent implements OnInit {

  @Input() planet!: Planet;


  constructor() { }

  ngOnInit(): void {
  }




}
