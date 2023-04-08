import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { optionsEnvironment } from 'src/environments/environment.development';
import { Option } from '../models/option.model';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {
  baseApiUrl: string = optionsEnvironment.baseApiUrl;
  get: string = optionsEnvironment.getOptions;
  post: string = optionsEnvironment.insertOpption;

  constructor(private http: HttpClient) { }

  getOptions(): Observable<Option[]> {
    return this.http.get<Option[]>(this.get)
  }

  postOptions( data: any): Observable<Option[]>  {
    return this.http.post<Option[]>(this.post, data);
  }
}
