import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IContatos } from 'src/app/interfaces/contatos';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {


   private apiUrl = 'http://localhost:8080/api/contato';

    constructor(private http: HttpClient) {}

    searchPessoas(): Observable<IContatos[]> {
      return this.http.get<IContatos[]>(`${this.apiUrl}`);
    }

    getPessoaById(id: number): Observable<IContatos> {
      return this.http.get<IContatos>(`${this.apiUrl}/${id}`);
    }


    create(contato: IContatos): Observable<IContatos> {
      return this.http.post<IContatos>(`${this.apiUrl}`, contato);
    }

    updatePessoa(contato: IContatos): Observable<IContatos> {
      const url = `${this.apiUrl}/${contato.id}`;
      return this.http.put<IContatos>(url, contato);
    }

    deletePessoas(id: number): Observable<IContatos> {
      return this.http.delete<IContatos>(`${this.apiUrl}/${id}`);
    }
}

