import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit{

  users: User[] = [];

  // result: boolean ;

  login: string;
  password: string;

  data: any = {
    "login": "logggin",
    "password": "looogin"
  };

  constructor(
    private http:HttpClient,
    private userService: UsersService,
    private route: Router
    ) {

    }

  ngOnInit():void { };

  submit()
  {
    this.data.login = this.login;
    this.data.password = this.password;

    this.userService.verifyUser(this.data)
      .subscribe((result) => {
            if(result) {
              // this.result = true;
              console.log('result',result);
              this.route.navigate(['/home']);
            } else {
              alert('Login or Passwrd is incorrect')
              console.log('result',result);
              // this.result = false;
            }
          }
          )

    // this.http.post('http://localhost:5101/api/Users/login',this.data)
    //   .subscribe((result) => {
    //     console.log('result',result);
    //     if(result) {
    //       this.result = true;
    //     } else {
    //       this.result = false;
    //     }
    //   }
    //   )


  }
  /* Route service: manually redirect to route */
}
