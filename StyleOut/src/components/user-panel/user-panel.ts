import { Component } from '@angular/core';


/*
  Generated class for the UserPanel component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'user-panel',
  templateUrl: 'user-panel.html',
})
export class UserPanel {

  text: string;

  constructor() {
    console.log('Hello UserPanel Component');
    this.text = 'Hello World';
  }

}
