import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit{

  fullname!: string;
  bidrthDay!: Date;
  login!: string;
  password!: string;

  // users: User[] = [];

  data: any = {
    "fullName": "",
    "birthDate": "",
    "login": "",
    "password": ""
  };

  /*
  {
    "fullName": "driss daif",
    "birthDate": "2023-04-01",
    "login": "driss",
    "password": "DRISS"
  }
  */

  constructor(
    private http:HttpClient,
    private userService: UsersService
    ) {

    }

  ngOnInit():void { };

  submit()
  {

    this.data.fullName = this.fullname;
    this.data.birthDate = this.bidrthDay.toString();
    this.data.login = this.login;
    this.data.password = this.password;

    this.userService.registerUser(this.data)
    .subscribe((result) => {
      console.log('result', result);
      if(result){
        console.log('trueee');
        alert('Registered seccussefly')
      } else {
        console.log('false')
      }
    })
    // console.log(this.data)

  }
  /* Route service: manually redirect to route */
}
