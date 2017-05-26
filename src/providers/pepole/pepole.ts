import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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
