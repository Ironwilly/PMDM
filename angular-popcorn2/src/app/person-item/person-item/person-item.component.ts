import { Component, Input, OnInit } from '@angular/core';
import { person, personDetail } from 'src/app/models/interfaces/people-popular';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.css']
})
export class PersonItemComponent implements OnInit {

    @Input() personInput: person | undefined;
    @Input() personDetailInput:personDetail | undefined;

    constructor(private personService: PersonService) { }

    ngOnInit(): void {
    }

    imagenPerson(personPath: String | undefined) :string{
      if(personPath){
        let result = `http://image.tmdb.org/t/p/w500/${personPath}`;
      return result;
      }
      else{
        return '';
      }
    }




}
