import { Component, OnInit } from '@angular/core';
import { OrdenesService } from '../../../core/services/ordenes.service'

@Component({
  selector: 'app-listar-corte',
  templateUrl: './listar-corte.component.html',
  styleUrls: ['./listar-corte.component.scss']
})
export class ListarCorteComponent implements OnInit {

  dataSource: any[] =[];

  constructor(private srvOrdenes : OrdenesService) { }

  ngOnInit(): void {
    this.iniciarFormulario();
  }


  iniciarFormulario() {
    this.srvOrdenes.buscarOrdenes().subscribe((data : any) => {
      this.dataSource = data;
      console.log(data);
      
    })
  }

}
