import { ContasServiceService } from './../contas-service.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ContaBancariaTO } from 'src/app/models/conta-bancaria-to.interface';

@Component({
  selector: 'app-contas-list',
  templateUrl: './contas-list.component.html',
  styleUrls: ['./contas-list.component.scss']
})
export class ContasListComponent {
  resources$: Observable<ContaBancariaTO[]> | null = null;
  loading$: Observable<boolean> | null = null;
  columns = [
    "Nome do Banco",
    "Agência",
    "Número da Conta",
    "Tipo de Conta"
  ]

  constructor(private service: ContasServiceService) {
  }

  listar() {
    this.resources$ = this.service.list();
  }
}
