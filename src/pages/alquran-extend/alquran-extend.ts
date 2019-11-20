import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { MediaPlayProvider } from '../../providers/media-play/media-play';


/**
 * Generated class for the AlquranExtendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alquran-extend',
  templateUrl: 'alquran-extend.html',
})
export class AlquranExtendPage {

  ParamFromPrevious:any;
  plays = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public platform:Platform,public medias:MediaPlayProvider) {

    platform.ready().then(()=>{
      this.medias.preLoad('Adh-Dhuhaa','assets/sounds/audio_alquran/Adh-Dhuhaa.mp3');
      this.medias.preLoad('Al-Aadiyaat','assets/sounds/audio_alquran/Al-Aadiyaat.mp3');
      this.medias.preLoad('Al-Ashr','assets/sounds/audio_alquran/Al-Ashr.mp3');
      this.medias.preLoad('Al-Ikhlas','assets/sounds/audio_alquran/Al-Ikhlas.mp3');
      this.medias.preLoad('Al-Kaafirun','assets/sounds/audio_alquran/Al-Kaafirun.mp3');
      this.medias.preLoad('Al-Kautsar','assets/sounds/audio_alquran/Al-Kautsar.mp3');
      this.medias.preLoad('Al-Lahab','assets/sounds/audio_alquran/Al-Lahab.mp3');
      this.medias.preLoad('Al-Mauun','assets/sounds/audio_alquran/Al-Mauun.mp3'); 
      this.medias.preLoad('Al-Qadr','assets/sounds/audio_alquran/Al-Qadr.mp3');
      // this.medias.preLoad('Al-Quraisy','assets/sounds/audio_alquran/Al-Quraisy.mp3');
      // this.medias.preLoad('Al-Zalzalah','assets/sounds/audio_alquran/Al-Zalzalah.mp3');
      // this.medias.preLoad('Alam-Nasyrah','assets/sounds/audio_alquran/Alam-Nasyrah.mp3');
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoaHarianExtendPage');
  }
  ionViewWillEnter(){
   this.ParamFromPrevious = this.navParams.get('goto');
   
  }
  ionViewWillLeave(){

    this.medias.unLoad('Adh-Dhuhaa');
    this.medias.unLoad('Al-Aadiyaat');
    this.medias.unLoad('Al-Ashr');
    this.medias.unLoad('Al-Ikhlas');
    this.medias.unLoad('Al-Kaafirun');
    this.medias.unLoad('Al-Kautsar');
    this.medias.unLoad('Al-Lahab');
    this.medias.unLoad('Al-Mauun'); 
    this.medias.unLoad('Al-Qadr');
    // this.medias.unLoad('Al-Quraisy');
    // this.medias.unLoad('Al-Zalzalah');
    // this.medias.unLoad('Alam-Nasyrah');
   
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
