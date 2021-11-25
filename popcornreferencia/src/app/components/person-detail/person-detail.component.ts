import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { People } from 'src/app/models/interfaces/person-pupolar.interface';
import { PersonResponse } from 'src/app/models/person.interface';
import { PersonService } from 'src/app/services/person.service';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  person!: PersonResponse;

  constructor(private personService: PersonService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get('id');

    this.personService.getPerson(id!).subscribe(result =>{
      this.person = result;

      console.log(this.person);

    })



  }
  getPersonImageUrl(Person: PersonResponse) {
    return `${environment.imagePersonUrl}${Person.profile_path}`;
  }
} 
