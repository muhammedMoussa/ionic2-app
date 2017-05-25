import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PepoleProvider } from '../../providers/pepole/pepole';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //Old Static Json Data
  // New Dinamic data
  // public pepole = this.service.getPepole()
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

  ionViewDidLoad() {
      console.log(this.pepole)
  }

  //Reorder List
  toggleReorder(){
    this.shouldReorder = !this.shouldReorder
  }
}
