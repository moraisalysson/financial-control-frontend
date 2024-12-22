import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TiposContasBancarias } from 'src/app/models/tipos-contas.interface';

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
    {value: 1, description: 'Conta poupança'},
  ];

  constructor(private fb: FormBuilder) {
    this.contaForm = this.fb.group({
      nomeBanco: ['', [Validators.required]],
      agencia: ['', [Validators.required]],
      numeroConta: ['', [Validators.required]],
      tipoConta: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if(this.contaForm.valid) {
      console.log(this.contaForm.value);
    } else {
      console.log("Invalid form");
    }
  }

  onReset() {
    this.contaForm.reset();
  }
}
