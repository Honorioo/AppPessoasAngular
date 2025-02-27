import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, first, Observable, tap, throwError } from 'rxjs';
import { IPessoas } from '../interfaces/pessoas';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  private apiUrl = 'http://localhost:8080/api/pessoa';

  constructor(private http: HttpClient) {}

  searchPessoas(): Observable<IPessoas[]> {
    return this.http.get<IPessoas[]>(`${this.apiUrl}`);
  }

  getPessoaById(id: string): Observable<IPessoas> {
    return this.http.get<IPessoas>(`${this.apiUrl}/${id}`);
  }
  update(pessoa: IPessoas): Observable<IPessoas> {
    return this.http.put<IPessoas>(`${this.apiUrl}/${pessoa.id}`, pessoa);
  }
  deletePessoas() {
    this.http.delete(`${this.apiUrl}/pessoa/${1}`);
  }
}
