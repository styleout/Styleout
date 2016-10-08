import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the SignUpPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sign-up-page',
  templateUrl: 'sign-up-page.html'
})
export class SignUpPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SignUpPage Page');
  }

}
