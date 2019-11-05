import { Injectable } from '@angular/core';
import {Details} from './Details';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailsServiceService {

  constructor(private http: HttpClient) { }

  fetchData(id: string): Observable<Details> {
    return this.http.get<Details>('http://localhost:8080/getData/' + id);
  }
}
