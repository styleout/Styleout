import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { UserLoginPage } from '../pages/user-login-page/user-login-page'; 
import { HomePage } from '../pages/home-page/home-page';
import { RewardsPage } from '../pages/rewards-page/rewards-page';
import { ChallengeListPage } from '../pages/challenge-list-page/challenge-list-page';
import { BlogPostListPage } from '../pages/blog-post-list-page/blog-post-list-page';

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
    RewardsPage,
    ChallengeListPage,
    BlogPostListPage,
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
    ChallengeListPage,
    BlogPostListPage,
  ],
  providers: []
})
export class AppModule {}
