import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'
import { PepoleProvider } from '../../providers/pepole/pepole'
import { DetailsPage } from '../details/details';

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
    //Getting Data from Ingictable service
    this.service.getPepole()
      .subscribe(
        data => this.pepole = data.results
      )
  }
  //Navigation
  pushDetails(user){
    this.navCtrl.push(DetailsPage, user)
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
