import { Component, OnInit } from '@angular/core';
import { person } from '../models/interfaces/people-popular';

import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-person-popular-list-component',
  templateUrl: './person-popular-list-component.component.html',
  styleUrls: ['./person-popular-list-component.component.css']
})
export class PersonPopularListComponentComponent implements OnInit {
  personList: person[] | undefined

  constructor(private personService: PersonService) { }

  ngOnInit(): void {

    this.getPersons();
  }

  getPersons(){

    this.personService.getPopularPerson().subscribe(popularPersonResponse =>{
      this.personList = popularPersonResponse.results;
      }  );
  }



}
