import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { People } from 'src/app/models/interfaces/person-pupolar.interface';
import { PersonResponse } from 'src/app/models/person.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.css']
})
export class PersonItemComponent implements OnInit {

  @Input() PersonInput!: People;
  @Input() personResponse!: PersonResponse;

  constructor(private route: ActivatedRoute, private router: Router) { 

    
  }

  ngOnInit(): void {
    


  }

  getPersonImageUrl(Person: People) {
    return `${environment.imagePersonUrl}${Person.profile_path}`;
  }

}

