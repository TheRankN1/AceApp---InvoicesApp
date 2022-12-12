import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContractInterface } from '../../shared/interfaces/contract.interface';

@Injectable({ providedIn: 'root' })
export class ContractService {
  constructor(public http: HttpClient) {}

  public createContract(body: any) {
    return this.http.post('http://localhost:3000/api/createContract', body);
  }

  public getContracts(): Observable<ContractInterface[]> {
    return this.http.get<ContractInterface[]>(
      'http://localhost:3000/api/getContracts'
    );
  }

  public getContractById(id: string) {
    return this.http.get(`http://localhost:3000/api/createContract/${id}`);
  }

  public updateContract(body: any, id: string) {
    return this.http.post(
      `http://localhost:3000/api/createContract/${id}`,
      body
    );
  }
  /* TO DO : VARIABILE pt localhost */

  public deleteContract(id: string) {
    return this.http.delete(`http://localhost:3000/api/createContract/${id}`);
  }
}
