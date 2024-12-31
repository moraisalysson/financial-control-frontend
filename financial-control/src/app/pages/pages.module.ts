import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialDesignModule } from '../shared/material-design/material-design.module';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { TransacoesFormComponent } from './home/transacoes-form/transacoes-form.component';



@NgModule({
  declarations: [
    HomeComponent, NavbarComponent, HeaderComponent, FooterComponent, TransacoesFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialDesignModule,
    RouterModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
