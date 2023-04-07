import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseApiUrl: string = environment.baseApiUrl;
  users: string = environment.users;
  login: string = environment.login;
  register: string = environment.register;
  update: string = environment.update;

  constructor(private http: HttpClient) { }

  registerUser(data: any): Observable<User[]> {
    return this.http.post<User[]>(this.register, data)
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.users)
  }

  verifyUser(data: any): Observable<User[]> {
    return this.http.post<User[]>(this.login, data);
  }

  updateUser(id: number, data: any): Observable<User[]>  {
    return this.http.put<User[]>(this.update + id, data);
  }
}
