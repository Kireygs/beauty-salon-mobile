import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Specialists } from '../specialist.model';


@Injectable()
export class SpecialistProvider {

  selected: Specialists = new Specialists();
  spec: string;

  constructor(public http: HttpClient) {
  }
  

  getSpecialistsBySpec(spec: string){
    let filter = {"where":{"specialty":spec}};
    let url = 'http://188.225.25.159:3005/api/specialists?filter='+JSON.stringify(filter);
    return this.http.get<Specialists[]>(url);
  }

  getSpecialists(){
    let url = 'http://188.225.25.159:3005/api/specialists';
    return this.http.get<Specialists>(url);
  }

  login(data: Object = null) {
    let url = 'http://188.225.25.159:3005/api/specialists?filter='+JSON.stringify(data);
    return this.http.get<Specialists>(url);
  }

}
