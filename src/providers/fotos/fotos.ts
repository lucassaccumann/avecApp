import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FotosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FotosProvider {
  private baseApiPath = "http://api.salaovip.com.br";

  constructor(public http: HttpClient) {
    console.log('Hello FotosProvider Provider');
  }

  getIdFotos(){
    return this.http.get(this.baseApiPath + "/salao/66/galeria");
  }
}
