import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { CurrentUserInterface } from '../../../shared/interfaces/current-user.interface';
const AUTH_DATA_KEY = 'userProfile';
const ACCESS_TOKEN_KEY = 'accessToken';

@Injectable({
  providedIn: 'root',
})
export class JWTTokenService {
  public decodedToken: { [key: string]: string } | undefined;

  private _accessToken = '';

  get accessToken(): string {
    return this._accessToken;
  }

  set accessToken(token: string) {
    this._accessToken = token;
  }

  public isTokenOnLocalStorage(): boolean {
    return !!localStorage.getItem(ACCESS_TOKEN_KEY);
  }

  public initializeToken() {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

    if (accessToken) {
      this.setCurrentUser(accessToken);
    }
  }

  public setCurrentUser(accessToken: string) {
    console.log(accessToken);
    this.accessToken = accessToken;
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    localStorage.setItem(AUTH_DATA_KEY, JSON.stringify(this.getUser()));
  }

  public getUser(): CurrentUserInterface {
    return jwt_decode(this._accessToken);
  }

  public isTokenExpired(): boolean {
    const expiryTime = this.getExpiryTime();
    if (expiryTime) {
      return 1000 * +expiryTime - new Date().getTime() < 5000;
    } else {
      return false;
    }
  }

  public removeCurrentUser(): void {
    localStorage.removeItem(AUTH_DATA_KEY);
  }

  public removeAccessToken(): void {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  }

  private getExpiryTime() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken['exp'] : null;
  }

  private decodeToken() {
    if (this._accessToken) {
      this.decodedToken = jwt_decode(this._accessToken);
    }
  }
}
