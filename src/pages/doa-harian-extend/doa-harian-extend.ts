import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import { MediaPlayProvider } from '../../providers/media-play/media-play';


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

  constructor(public navCtrl: NavController, public navParams: NavParams,public platform:Platform,public medias:MediaPlayProvider) {

    platform.ready().then(()=>{
      this.medias.preLoad('sebelum_tidur','assets/sounds/Sebelum_tidur.mp3');
      this.medias.preLoad('setelah_bangun','assets/sounds/Doa_bangun_tidur.mp3');
      this.medias.preLoad('keluar_kamar_mandi','assets/sounds/Keluar_kamar_mandi.mp3');
      this.medias.preLoad('keluar_rumah','assets/sounds/Doa_keluar_rumah.mp3');
      this.medias.preLoad('masuk_kamar_mandi','assets/sounds/Doa_masuk_kamar_mandi.mp3');
      this.medias.preLoad('masuk_rumah','assets/sounds/Doa_masuk_rumah.mp3');
      this.medias.preLoad('bepergian','assets/sounds/Doa_naik_kendaraan_dan_bepergian.mp3');
      this.medias.preLoad('sebelum_makan','assets/sounds/Sebelum_makan.mp3');
      this.medias.preLoad('sesudah_makan','assets/sounds/Sesudah_makan.mp3');
      // this.medias.preLoad('sebelum','assets/sounds/Doa_ziarah_kubur.mp3');

    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoaHarianExtendPage');
  }
  ionViewWillEnter(){
   this.ParamFromPrevious = this.navParams.get('goto');
   
  }
  ionViewWillLeave(){

    this.medias.unLoad('sebelum_tidur');
    this.medias.unLoad('setelah_bangun');
    this.medias.unLoad('keluar_kamar_mandi');
    this.medias.unLoad('keluar_rumah');
    this.medias.unLoad('masuk_kamar_mandi');
    this.medias.unLoad('masuk_rumah');
    this.medias.unLoad('bepergian');
    this.medias.unLoad('sebelum_makan');
    this.medias.unLoad('sesudah_makan');
   
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
