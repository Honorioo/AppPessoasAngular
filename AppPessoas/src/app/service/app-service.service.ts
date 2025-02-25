import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPessoas } from '../interfaces/pessoas';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  searchPessoas(): Observable<IPessoas[]> {
    return this.http.get<IPessoas[]>(`${this.apiUrl}/pessoa`);
  }
}
