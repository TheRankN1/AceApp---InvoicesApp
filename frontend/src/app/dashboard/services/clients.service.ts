import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientInterface } from '../../shared/interfaces/client.interface';

@Injectable({ providedIn: 'root' })
export class ClientsService {
  public client!: ClientInterface;
  public id = '';
  constructor(public http: HttpClient) {}

  public createClient(body: any): Observable<{ _id: string }> {
    return this.http.post<{ _id: string }>(
      'http://localhost:3000/api/createClient',
      body
    );
  }

  public readClients(): Observable<ClientInterface[]> {
    return this.http.get<ClientInterface[]>(
      'http://localhost:3000/api/readAllClients'
    );
  }

  public readClientById(ClientId: string): Observable<ClientInterface> {
    return this.http.get<ClientInterface>(
      `http://localhost:3000/api/readClientById/${ClientId}`
    );
  }

  public updateClient(body: any, id: string) {
    return this.http.patch(
      `http://localhost:3000/api/updateClient/${id}`,
      body
    );
  }

  public deleteClient(id: string) {
    return this.http.delete(`http://localhost:3000/api/deleteClient/${id}`);
  }
}
