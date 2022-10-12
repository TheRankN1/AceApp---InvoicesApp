import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthServices {
  constructor(private http: HttpClient) {}

  public register(body: any) {
    return this.http.post('http://localhost:3000/api/register', body);
  }
}
