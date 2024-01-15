import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/config/api.config';
import { Cliente } from 'src/app/core/models/modelCliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private http = inject(HttpClient);

  constructor() { }

  findAll(): Observable<Cliente>{
    let clientes = this.http.get<Cliente>(`${API_URL.urlBase}/api/v1/cliente`);
    return clientes;
  }
}
