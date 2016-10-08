import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the RewardsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-rewards-page',
  templateUrl: 'rewards-page.html'
})
export class RewardsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello RewardsPage Page');
  }

}
