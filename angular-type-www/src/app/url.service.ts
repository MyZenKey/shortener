import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Url } from './url';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private baseUrl = "http://localhost:8080/generate";

  constructor(private http: HttpClient) { }

  getUrls():Observable<Url[]>{
    return this.http.get<Url[]>(`${this.baseUrl}`);
  }
}
