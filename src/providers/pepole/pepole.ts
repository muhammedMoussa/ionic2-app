import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PepoleProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PepoleProvider {
  public pepole = []
  constructor(public http: Http) {
    console.log('Hello PepoleProvider Provider');
  }

  getPepole(){
    return this.http.get('https://randomuser.me/api/?results=50')
    .map(
      res => res.json()
    )
  }

}
