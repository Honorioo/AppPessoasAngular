import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, first, Observable, tap, throwError } from 'rxjs';
import { IPessoas } from '../interfaces/pessoas';
import { IPessoasCompleta } from '../interfaces/pessoaCompleta';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  private apiUrl = 'http://localhost:8080/api/pessoa';

  constructor(private http: HttpClient) {}

  searchPessoas(): Observable<IPessoas[]> {
    return this.http.get<IPessoas[]>(`${this.apiUrl}`);
  }

  getPessoaById(id: number): Observable<IPessoasCompleta> {
    return this.http.get<IPessoasCompleta>(`${this.apiUrl}/${id}`);
  }


  create(pessoa: IPessoasCompleta): Observable<IPessoas> {
    return this.http.post<IPessoas>(`${this.apiUrl}`, pessoa);
  }

  updatePessoa(pessoa: IPessoasCompleta): Observable<IPessoas> {
    const url = `${this.apiUrl}/${pessoa.id}`;
    return this.http.put<IPessoas>(url, pessoa);
  }

  deletePessoas(pessoa: IPessoasCompleta) {
    this.http.delete(`${this.apiUrl}/pessoa/${1}`);
  }
}
