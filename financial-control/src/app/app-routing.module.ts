import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'contas-bancarias'},
  {
    path: 'contas-bancarias',
    loadChildren: () => import('./contas-bancarias/contas-bancarias.module').then(m => m.ContasBancariasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
