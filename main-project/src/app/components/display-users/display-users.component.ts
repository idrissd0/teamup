import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class AllUsersComponent {

  Users: User[] = [];
  constructor(private userService: UsersService) {  };

  getUsers(): void {
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

  /* Route service: manually redirect to route */
}
