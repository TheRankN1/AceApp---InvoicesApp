import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ClientsService {
  constructor(public http: HttpClient) {}

  public createClient(body: any): Observable<{ _id: string }> {
    return this.http.post<{ _id: string }>(
      'http://localhost:3000/api/createClient',
      body
    );
  }

  public readClients() {
    return this.http.get('http://localhost:3000/api/readAllClients');
  }

  public readClientById(id: string) {
    return this.http.get(`http://localhost:3000/api/readClientById/${id}`);
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
