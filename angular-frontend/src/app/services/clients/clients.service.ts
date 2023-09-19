import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Client[]>{
    return this.http.get<Client[]>('https://private-anon-da95680313-maximatech.apiary-mock.com/fullstack/cliente');
  }
}
