import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the UserLoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-login-page',
  templateUrl: 'user-login-page.html'
})
export class UserLoginPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello UserLoginPage Page');
  }

}
