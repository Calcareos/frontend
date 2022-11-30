import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorteRoutingModule } from './corte-routing.module';
import { FrmCorteComponent } from './frm-corte/frm-corte.component';
import { ListarCorteComponent } from './listar-corte/listar-corte.component';


@NgModule({
  declarations: [
    FrmCorteComponent,
    ListarCorteComponent
  ],
  imports: [
    CommonModule,
    CorteRoutingModule
  ]
})
export class CorteModule { }
