import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home-page/home-page';
import { UserService } from '../../providers/user-service';
import { ToastController } from "ionic-angular";

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

  constructor(public navCtrl: NavController, public userService: UserService, private toastCtrl: ToastController) {}

  public FName: string; 
  public LName: string;
  public Email: string;
  public Password: string;
  public RepeatPassword: string;

  public sendToast(message){
    let toast = this.toastCtrl.create({
      message:message,duration:3000
    });

    toast.present();
  }

  public signUp(){
    if( this.Password !== this.RepeatPassword ){
      this.sendToast("Password does not match.");
    }else{
      this.userService.signUpUserUsingEmailPassword(this.FName,this.Email,this.Password).then(
        ( success )=>{ 
          var this_class = this; 
          this_class.userService.login(this_class.Email,this_class.Password).then(
            ( login_succes ) =>{ var this_class = this;  this_class.navCtrl.setRoot(HomePage)},
            ( login_fail ) =>{ var this_class = this; this_class.sendToast(login_fail)}
          )
          
         },
        ( failure )=>{ var this_class = this; this_class.sendToast(failure) }
      )
    }
  }


  ionViewDidLoad() {
    console.log('Hello SignUpPage Page');
  }

}




      
       
     
    