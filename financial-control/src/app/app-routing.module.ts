import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContasBancariasModule } from './contas-bancarias/contas-bancarias.module';
import { ContasFormComponent } from './contas-bancarias/contas-form/contas-form.component';
import { ContasListComponent } from './contas-bancarias/contas-list/contas-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'contas-bancarias/form', component: ContasFormComponent},
  {path: 'contas-bancarias/list', component: ContasListComponent},
  {
    path: 'home',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
