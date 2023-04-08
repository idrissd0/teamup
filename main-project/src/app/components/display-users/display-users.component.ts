import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { OptionsService } from 'src/app/services/options.service'; // Import Option service that will
import { User } from 'src/app/models/user.model'; // user's Service to make the call with our API
import { Option } from 'src/app/models/option.model'; // option's Service to make the call with our API
@Component({
  selector: 'app-all-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class AllUsersComponent implements OnInit{

  Users: User[] = [];
  Options: Option[] = [] // Generate a parametr that holds our Option model in case we gonna edit the option
  opForm: FormGroup;

  constructor(private userService: UsersService,
    private http:HttpClient,
    private optionsService: OptionsService
    ) {  };

  ngOnInit() {
    this.opForm = new FormGroup({});
  }

  getUsers() {
    this.userService.getAllUsers()
    .subscribe({
      next: (users) => {
        console.log(users);
        this.Users = users;
      },
      error: (err) => {
        console.log(err);
      },
    })
  };

  hide(){
    this.Users = [];
  }

  onSubmit()  {

    this.optionsService.getOptions()
    .subscribe({
      next: (data) => {
        this.Options = data
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    })
  }

  /* Route service: manually redirect to route */
}
