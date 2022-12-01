import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientInterface } from '../../shared/interfaces/client.interface';
import { ConfigInterface } from '../../shared/interfaces/config.interface';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  constructor(public http: HttpClient) {}

  public createConfig(body: any): Observable<ConfigInterface[]> {
    return this.http.post<ConfigInterface[]>(
      'http://localhost:3000/api/createConfig',
      body
    );
  }
  public readConfigs(): Observable<ConfigInterface[]> {
    return this.http.get<ConfigInterface[]>(
      'http://localhost:3000/api/getConfig'
    );
  }
  public readConfigById(id: string): Observable<ConfigInterface> {
    return this.http.get<ConfigInterface>(
      `http://localhost:3000/api/getConfigById/${id}`
    );
  }

  public updateConfig(body: any, id: string) {
    return this.http.patch(
      `http://localhost:3000/api/updateConfig/${id}`,
      body
    );
  }

  public deleteConfig(id: string) {
    return this.http.delete(`http://localhost:3000/api/deleteConfig/${id}`);
  }
}
