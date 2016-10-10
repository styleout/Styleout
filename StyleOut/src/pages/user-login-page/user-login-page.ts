import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home-page/home-page';
import { SignUpPage } from '../sign-up-page/sign-up-page';
import { ForgotPasswordPage } from '../forgot-password-page/forgot-password-page';
import { UserService } from '../../providers/user-service';
import { ToastController } from "ionic-angular";

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

  constructor(public navCtrl: NavController, public userService: UserService, private toastCtrl: ToastController) {}

  public email:string;
  public password:string;

  public sendToast(message){
    let toast = this.toastCtrl.create({
      message:message,duration:3000
    });

    toast.present();
  }

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
    this.userService.login(this.email,this.password).then( (success)=>{
       var self_class = this;
       self_class.navCtrl.setRoot(HomePage);
    }, (failure)=>{
       var self_class = this;
       self_class.sendToast(failure);
    });
  }

  public facebookLogin(){
    this.userService.facebookLogin().then((success:string)=>{
          var self_class = this;
          self_class.navCtrl.setRoot(HomePage);
    },
    (fail:string)=>{
          var self_class = this;
          self_class.sendToast(fail);
    });
  }

  public googleLogin(){
    this.userService.googleLogin().then((success:string)=>{
          var self_class = this;
          self_class.navCtrl.setRoot(HomePage);
    },
    (fail:string)=>{
          var self_class = this;
          self_class.sendToast(fail);
    });
  }
}
