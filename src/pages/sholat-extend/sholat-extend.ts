import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { MediaPlayProvider } from '../../providers/media-play/media-play';


/**
 * Generated class for the SholatExtendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sholat-extend',
  templateUrl: 'sholat-extend.html',
})
export class SholatExtendPage {

  ParamFromPrevious:any;
  plays = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,platform:Platform,public medias:MediaPlayProvider) {

    platform.ready().then(()=>{
      this.medias.preLoad('subuh','assets/sounds/niat_sholat/subuh.mp3');
      this.medias.preLoad('zuhur','assets/sounds/niat_sholat/dzuhur.mp3');
      this.medias.preLoad('ashar','assets/sounds/niat_sholat/ashar.mp3');
      this.medias.preLoad('maghrib','assets/sounds/niat_sholat/maghrib.mp3');
      this.medias.preLoad('isya','assets/sounds/niat_sholat/isya.mp3');
      this.medias.preLoad('iftitah','assets/sounds/sholat/Doa_Iftitah.mp3');
      this.medias.preLoad('alfatihah','assets/sounds/sholat/Al_Fatihah.mp3');
      this.medias.preLoad('ruku','assets/sounds/sholat/Doa_Ruku.mp3');
      this.medias.preLoad('iktidal','assets/sounds/sholat/Doa_Bangun_Dari_Ruku.mp3');
      this.medias.preLoad('sujud','assets/sounds/sholat/Doa_Sujud.mp3');
      this.medias.preLoad('iftirasy','assets/sounds/sholat/Doa_Duduk_DiAntara_Dua_Sujud.mp3');
      // this.medias.preLoad('sebelum','assets/sounds/Doa_ziarah_kubur.mp3');

    });

  }

  ionViewWillEnter(){
    this.ParamFromPrevious = this.navParams.get('goto');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SholatExtendPage');
  }
  
  ionViewWillLeave(){

    this.medias.unLoad('subuh');
    this.medias.unLoad('zuhur');
    this.medias.unLoad('ashar');
    this.medias.unLoad('maghrib');
    this.medias.unLoad('isya');
   
  }

  play(param){
    this.plays = true;
    this.medias.play(param);
  }

  stop(param){
    this.plays = false;
    this.medias.stop(param);
  }

}
