import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BackendApiService {

  constructor(private http: Http) { }

  getServiceData(): Observable<any> {
    let addr: string = 'http://localhost:50086/Weather/CountryCities/Australia';
    
    return this.http.get(addr)
      .map((res:Response) => res.json());
    //return  "app Works with Service data!";
  }

    getServiceData2(): Observable<string[]> {
    let addr: string = 'http://localhost:50086/Weather/CountryCities/Australia';
    
    return this.http.get(addr)
      .map((res:Response) => res.json().result);
    //return  "app Works with Service data!";
  }
}
