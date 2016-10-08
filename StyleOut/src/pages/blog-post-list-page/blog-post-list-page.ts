import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the BlogPostListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-blog-post-list-page',
  templateUrl: 'blog-post-list-page.html'
})
export class BlogPostListPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello BlogPostListPage Page');
  }

}
