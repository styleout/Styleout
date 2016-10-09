import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home-page/home-page';
import { SignUpPage } from '../sign-up-page/sign-up-page';
import { ForgotPasswordPage } from '../forgot-password-page/forgot-password-page';
import { UserService } from '../../providers/user-service';

/*
  Generated class for the UserLoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-login-page',
  templateUrl: 'user-login-page.html',
  providers:[ UserService ]
})
export class UserLoginPage {

  constructor(public navCtrl: NavController, public userService: UserService) {}

  public email:string;
  public password:string;

  public continueWithoutLogin(){
    this.navCtrl.setRoot(HomePage);
  }

  public forgotPassword(){
    this.navCtrl.push(ForgotPasswordPage);
  }

  public signUp(){
    this.navCtrl.push(SignUpPage);
  }

  public login(){
    this.userService.login(this.email,this.password);
  }

  public facebookLogin(){
    this.userService.facebookLogin().then(
      ()=>{this.navCtrl.setRoot(HomePage);}
    );
  }

  public googleLogin(){
     this.userService.googleLogin().then(
      ()=>{this.navCtrl.setRoot(HomePage);}
    );
  }


}
