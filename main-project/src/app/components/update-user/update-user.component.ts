import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  myForm: FormGroup;
  data: any = {
    'id': null,
    "fullName": "",
    "birthDate": "",
    "login": "",
    "password": ""
  };
  userId: number;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private http:HttpClient,
    private userService: UsersService,
    private router: Router
    )  { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = Number(params['id']);
      console.log(this.userId); // You can access the parameter using the 'params' object
    })


    this.myForm = new FormGroup({
      name: new FormControl(''),
      birthDate: new FormControl(''),
      login: new FormControl(''),
      password: new FormControl('')
    });
    // this.myForm.valueChanges.subscribe(console.log)
  }

  onSubmit(form: FormGroup) {
    // console.log('Valid?', form.valid); /*true or false */console.log('Name', form.value.name); console.log('Email', form.value.email); console.log('Message', form.value.message);

    this.data.id = this.userId;
    this.data.fullName = form.value.name;
    this.data.birthDate = form.value.birthDate;
    this.data.login = form.value.login;
    this.data.password = form.value.password;
    console.log(this.data);
    this.userService.updateUser(this.userId, this.data)
    .subscribe((result) => {
          if(result) {
            // this.result = true;
            console.log('result',result);
            alert('user updated correctly!!')
            this.router.navigate(['/allusers']);
          } else {
            alert('Regicted')
            console.log('result',result);
            // this.result = false;
          }
        }
        )
  }
}
