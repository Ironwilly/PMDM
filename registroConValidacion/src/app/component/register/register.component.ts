import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent implements OnInit {
  name = new FormControl('');
  registerForm: FormGroup | undefined;
  submmited = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        username: ["", Validators.required],
        email:    ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(6)]]
    

      },
      
    );
  }
  get form(){
    return this.registerForm?.controls;
  }

  onSubmit(){
    this.submmited = true;
    if(this.registerForm?.invalid){
      return;
    }

    alert(
      "SUCCESS!!" + JSON.stringify(this.registerForm?.value, null,4)
    );
  }
 
  onReset(){
    this.submmited = false;
    this.registerForm?.reset();
  }

}
