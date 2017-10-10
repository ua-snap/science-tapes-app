import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Ionic2RatingModule } from 'ionic2-rating';

/**
 * Generated class for the SurveyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-survey',
  templateUrl: 'survey.html'
})
export class SurveyPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  logForm() {
    this.navCtrl.pop();
  }
}
