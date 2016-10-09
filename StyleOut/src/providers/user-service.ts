import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Auth, User,IDetailedError } from '@ionic/cloud-angular'; //UserDetails
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

  public facebookLogin(){
    let p = new Promice();
    this.auth.login('facebook').then(p.resolve(true),p.reject(false));
    return p;
  }

  public googleLogin(){
    let p = new Promice();
    this.auth.login('google').then(p.resolve(true),p.reject(false));
    return p;
  }

  public login(email:string, password:string){
    return this.auth.login('basic',{'email':email,'password':password});
  }

  public signUpUserUsingEmailPassword(username:string, email:string, password:string){
    let p = new Promice();

    this.auth.signup({'username':username,'email':email,'password':password}).then(()=>{
        this.auth.login('basic',{'email':email,'password':password})
          .then(p.resolve(true),p.reject(false));
    },( err:IDetailedError<string[]> )=>{
        this.errors = [];

        for( let e of err.details ){
          switch (e)
          {
            case 'conflict_email' :
              this.errors.push("Email already in use.");
              break;
            case 'conflict_username' :
              this.errors.push("Username already in use");
              break;
            case 'invalid_email':
              this.errors.push("Email is not valid.");
              break;
            default:
              break;
          }
       }

       p.reject(false);
    });

    return p;
  }

}
