import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { MyApp } from './app.component';

import { UserLoginPage } from '../pages/user-login-page/user-login-page'; 
import { HomePage } from '../pages/home-page/home-page';
import { RewardsPage } from '../pages/rewards-page/rewards-page';
import { ChallengeListPage } from '../pages/challenge-list-page/challenge-list-page';
import { BlogPostListPage } from '../pages/blog-post-list-page/blog-post-list-page';
import { SignUpPage } from '../pages/sign-up-page/sign-up-page';
import { ForgotPasswordPage } from '../pages/forgot-password-page/forgot-password-page';

//user panel component for side menu
import { UserPanel } from '../components/user-panel/user-panel';

//services 
import { UserService } from '../providers/user-service';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '0c7915e7'
  }
};

@NgModule({
  declarations: [
    MyApp,
    UserLoginPage,
    HomePage,
    UserPanel,
    RewardsPage,
    ChallengeListPage,
    BlogPostListPage,
    SignUpPage,
    ForgotPasswordPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ], 
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UserLoginPage,
    HomePage,
    RewardsPage,
    ChallengeListPage,
    BlogPostListPage,
    SignUpPage,
    ForgotPasswordPage
  ],
  providers: [
    UserService
  ]
})
export class AppModule {}
