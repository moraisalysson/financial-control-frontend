import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContaBancariaTO } from '../models/conta-bancaria-to.interface';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContasServiceService {
  constructor(private httpClient: HttpClient) {}

  private readonly API_ENDPOINT = 'http://localhost:8080/api/conta_bancaria';

  list() {
    return this.httpClient
      .get<ContaBancariaTO[]>(this.API_ENDPOINT + '/list', {
      })
      .pipe(
        first(),
        tap((contas) => console.log(contas))
      );
  }

  save(record: ContaBancariaTO) {
    return this.httpClient.post<ContaBancariaTO>(
      this.API_ENDPOINT + '/create',
      record
    );
  }
}
