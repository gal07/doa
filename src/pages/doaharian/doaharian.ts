import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DoaHarianExtendPage } from '../doa-harian-extend/doa-harian-extend';

/**
 * Generated class for the DoaharianPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doaharian',
  templateUrl: 'doaharian.html',
})
export class DoaharianPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoaharianPage');
  }

  Go(param){

    this.navCtrl.push(DoaHarianExtendPage,{goto:param})

  }

}
