import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChaveValor } from 'src/app/shared/models/chave-valor.interface';
import { TiposContasEnum } from 'src/app/shared/models/tipos-contas.enum';
import { TiposTransacoesEnum } from 'src/app/shared/models/tipos-transacoes.enum';

@Component({
  selector: 'app-transacoes-form',
  templateUrl: './transacoes-form.component.html',
  styleUrls: ['./transacoes-form.component.scss']
})
export class TransacoesFormComponent {
  contaForm: FormGroup;

  tiposTransacoesOptions: ChaveValor[] = TiposTransacoesEnum.values();

  constructor(private fb: FormBuilder) {
      this.contaForm = this.fb.group({
        nomeBanco: ['', [Validators.required]],
        agencia: ['', [Validators.required]],
        numeroConta: ['', [Validators.required]],
        tipo: ['', [Validators.required]],
      });
    }

    onSubmit() {
      if(this.contaForm.valid) {
       console.log("Valid form");

      } else {
        console.log("Invalid form");
      }
    }

    onReset() {
      this.contaForm.reset();
    }
}
