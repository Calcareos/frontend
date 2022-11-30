import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrmCorteComponent } from './frm-corte/frm-corte.component';
import { ListarCorteComponent } from './listar-corte/listar-corte.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'corte'
      },
      {
        path: '',
        component: FrmCorteComponent,
        data: {
          title: 'Corte'
        }
      },
      {
        path: 'lista',
        component: ListarCorteComponent,
        data: {
          title: 'Corte'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorteRoutingModule { }
