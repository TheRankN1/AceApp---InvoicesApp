import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class featureService {
  constructor(public http: HttpClient) {}

  public createFeature(body: any) {
    this.http.post('http://localhost:3000/api/createFeature', body);
  }

  public readFeatures() {
    this.http.get('http://localhost:3000/api/readFeatures');
  }

  public readFeaturesById(id: string) {
    return this.http.get(`http://localhost:3000/api/readFeatureById/${id}`);
  }

  public updateFeature(body: any, id: string) {
    return this.http.patch(
      `http://localhost:3000/api/updateFeature/${id}`,
      body
    );
  }

  public deleteFeature(id: string) {
    return this.http.delete(`http://localhost:3000/api/deleteFeature/${id}`);
  }
}
