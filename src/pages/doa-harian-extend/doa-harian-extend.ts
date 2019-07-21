import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DoaHarianExtendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doa-harian-extend',
  templateUrl: 'doa-harian-extend.html',
})
export class DoaHarianExtendPage {

  ParamFromPrevious:any;
  plays = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoaHarianExtendPage');
  }
  ionViewWillEnter(){
   this.ParamFromPrevious = this.navParams.get('goto');
  }

}
