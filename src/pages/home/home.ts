import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PepoleProvider } from '../../providers/pepole/pepole';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public pepole = []
  shouldReorder = false

  constructor(
    public navCtrl: NavController,
    public service: PepoleProvider
  ){
    this.service.getPepole()
      .subscribe(
        data => this.pepole = data.results
      )
  }

  //Refresher
  doRefresh(e){
    this.service.getPepole()
      .subscribe(
        data => this.pepole.unshift(...data.results),
        err => console.log(err),
        () => e.complete()
      )
  }
  //Infinite Scroll
  doInfinite(e){
    this.service.getPepole()
      .subscribe(
        data => this.pepole.push(...data.results),
        err => console.log(err),
        () => e.complete()
      )
  }
  //Reorder List
  toggleReorder(){
    this.shouldReorder = !this.shouldReorder
  }
}
