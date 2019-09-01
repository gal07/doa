import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SholatExtendPage } from './../sholat-extend/sholat-extend';

/**
 * Generated class for the SholatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sholat',
  templateUrl: 'sholat.html',
})
export class SholatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SholatPage');
  }

  Go(param){

    this.navCtrl.push(SholatExtendPage,{goto:param})

  }

}
