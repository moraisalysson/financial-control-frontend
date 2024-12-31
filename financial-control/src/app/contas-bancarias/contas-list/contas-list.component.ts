import { ContasServiceService } from './../contas-service.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ContaBancariaTO } from 'src/app/shared/models/conta-bancaria-to.interface';

@Component({
  selector: 'app-contas-list',
  templateUrl: './contas-list.component.html',
  styleUrls: ['./contas-list.component.scss']
})
export class ContasListComponent {
  resources$: Observable<ContaBancariaTO[]> | null = null;
  loading$: Observable<boolean> | null = null;

  constructor(private service: ContasServiceService) {
  }

  get columns() {
    return [
    "Nome do Banco",
    "Agência",
    "Número da Conta",
    "Tipo de Conta",
    "Saldo"
  ]
}

  listar() {
    this.resources$ = this.service.list();
  }
}
