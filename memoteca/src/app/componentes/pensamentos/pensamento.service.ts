import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pensamento } from './pensamento/pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private http: HttpClient) { }

  listar(pagina: number): Observable<Pensamento[]> {
    const itensPorPagina = 5;
    const params = new HttpParams().set("_page", pagina).set("_limit", itensPorPagina)
    return this.http.get<Pensamento[]>(this.API, { params })
  }

  criar(pensamento: Pensamento) {
    return this.http.post<Pensamento>(this.API, pensamento)
  }

  editar(pensamento: Pensamento):Observable<Pensamento> {
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento)
  }

  excluir(id: string): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url)
  }

  buscarPorId(id: string): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url)
  }
}
