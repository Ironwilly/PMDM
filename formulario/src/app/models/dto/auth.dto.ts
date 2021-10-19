import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

export class AuthLoginDto {


    email: string;
    password: string;



constructor() {


    this.email = '';
    this.password = '';


}

}

export class AuthRegistrerDto {



  username: string;
  email: string;
  password: string;
  code: string;


  constructor() {

    this.username = '';
    this.email = '';
    this.password = '';
    this.code = 'UDEMYANDROID';

  }
}
