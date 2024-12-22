import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContasBancariasRoutingModule } from './contas-bancarias-routing.module';
import { ContasFormComponent } from './contas-form/contas-form.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialDesignModule } from '../shared/material-design/material-design.module';


@NgModule({
  declarations: [
    ContasFormComponent
  ],
  imports: [
    CommonModule,
    ContasBancariasRoutingModule,
    MaterialDesignModule,
    SharedModule
  ],
  exports: [
    ContasFormComponent
  ]
})
export class ContasBancariasModule { }