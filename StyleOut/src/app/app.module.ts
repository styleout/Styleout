import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { UserLoginPage } from '../pages/user-login-page/user-login-page'; 
import { HomePage } from '../pages/home-page/home-page';
import { RewardsPage } from '../pages/rewards-page/rewards-page';

//ionic directives
import{ IONIC_DIRECTIVES } from 'ionic-angular';

//user panel component for side menu
import { UserPanel } from '../components/user-panel/user-panel';


@NgModule({
  declarations: [
    MyApp,
    UserLoginPage,
    HomePage,
    UserPanel,
    RewardsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UserLoginPage,
    HomePage,
    RewardsPage,
  ],
  providers: []
})
export class AppModule {}
