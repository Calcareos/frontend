import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  private env = environment.webApi + "/OrdenCompra";

  
  constructor(private _httpBase: HttpClient) { }

  
  /**
   * buscarPacientes
   */
   public buscarOrdenes(): Observable<any> {
    const url = this.env + "/GetOrdenes";
    return this._httpBase.get(url);
  }
}
