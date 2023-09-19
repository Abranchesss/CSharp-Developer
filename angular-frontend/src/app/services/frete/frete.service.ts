import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FreteService {

  constructor(private http: HttpClient) { }

  getValorFrete(qtde:number): Observable<Object>{
    return this.http.post('https://localhost:7128/calcularfrete?qtdItens=' + qtde.toString(), {});
  }
}
