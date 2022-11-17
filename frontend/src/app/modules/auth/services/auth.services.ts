import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthServices {
  constructor(private http: HttpClient) {}

  public register(body: any) {
    return this.http.post('http://localhost:3000/api/register', body);
  }
  public login(body: any): Observable<{ accessToken: string }> {
    return this.http.post<{ accessToken: string }>(
      'http://localhost:3000/api/login',
      body
    );
  }
}
