import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { UserLoginPage } from '../pages/user-login-page/user-login-page'; 
import { HomePage } from '../pages/home-page/home-page';


@NgModule({
  declarations: [
    MyApp,
    UserLoginPage,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UserLoginPage,
    HomePage
  ],
  providers: []
})
export class AppModule {}
