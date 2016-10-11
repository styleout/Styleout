import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Auth, User,IDetailedError,AuthLoginResult } from '@ionic/cloud-angular'; //UserDetails
import 'rxjs/add/operator/map';

/*
  Generated class for the UserService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable(
)
export class UserService {

  constructor(public http: Http, public auth: Auth, public user:User ) {
    console.log('Hello UserService Provider');
  }

  public errors: string[];

  public processError(error){

    if(error.response){
        return(error.response.body.error.message);
    }
    if(error.details){
      return(error.details[0])
    }else{
      return(error.message);
    }
  }
  public facebookLogin(){
    return new Promise( (resolve, reject)=>{
         var self_class = this;
         self_class.auth.login('facebook').then((success:AuthLoginResult) =>{ resolve("success") },(error)=>{
           var self_class = this;
           reject(self_class.processError(error));
          }
        ); 
    });     
  }

  public googleLogin() {
     return new Promise( (resolve, reject)=>{
         var self_class = this;
         self_class.auth.login('google').then((success:AuthLoginResult) =>{ resolve("success") },(error)=>{
           var self_class = this;
           reject(self_class.processError(error));
         }); 
    });     
  }

  public login(email:string, password:string){
     return new Promise( (resolve, reject)=>{
         var self_class = this;
         self_class.auth.login('basic',{'email':email,'password':password}).then((success:AuthLoginResult) =>{ resolve("success") },(error)=>{
           var self_class = this;
           reject(self_class.processError(error));
          }); 
    });    
    
  }

  public signUpUserUsingEmailPassword(username:string, email:string, password:string){
      return new Promise((resolve,reject)=>{
          var self_class = this;
          self_class.auth.signup({'username':username,'email':email,'password':password}).then( (success)=>{ resolve("success") },  ( err:IDetailedError<string[]> )=>{
              var self_class = this;
              self_class.errors = [];
              debugger;
              for( let e of err.details ){
                switch (e)
                {
                  case 'conflict_email' :
                   reject("Email already in use.");
                   break;
                  case 'conflict_username' :
                    reject("Username already in use");
                    break;
                  case 'invalid_email':
                    reject("Email is not valid.");
                    break;
                  default:
                    reject(err.message)
                    break;
                }
              }
          });
      });
  }

}
