import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TiposContasBancarias } from 'src/app/models/tipos-contas.interface';
import { ContasServiceService } from '../contas-service.service';
import { ContaBancariaTO } from 'src/app/models/conta-bancaria-to.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contas-form',
  templateUrl: './contas-form.component.html',
  styleUrls: ['./contas-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContasFormComponent {
  contaForm: FormGroup;

  tiposContasOptions: TiposContasBancarias[] = [
    {value: 0, description: 'Conta Corrente'},
    {value: 1, description: 'Conta Poupança'},
  ];

  constructor(private fb: FormBuilder, private service: ContasServiceService) {
    this.contaForm = this.fb.group({
      nomeBanco: ['', [Validators.required]],
      agencia: ['', [Validators.required]],
      numeroConta: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if(this.contaForm.valid) {
      console.log(this.contaForm.value);
      this.service.save(this.contaForm.value).subscribe(
        {
          next: (response) => console.log("Conta criada", response),
          error: (erro) => console.log("Erro ao criar a conta", erro),
        }
      );
    } else {
      console.log("Invalid form");
    }
  }

  onReset() {
    this.contaForm.reset();
  }
}
