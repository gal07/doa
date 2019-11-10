import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import { MediaPlayProvider } from '../../providers/media-play/media-play';
/**
 * Generated class for the WudhuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wudhu',
  templateUrl: 'wudhu.html',
})
export class WudhuPage {

  plays = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public medias:MediaPlayProvider,public platform:Platform) {
    
    platform.ready().then(()=>{
      this.medias.preLoad('sebelum','assets/sounds/wudhu/sebelum.mp3');
      this.medias.preLoad('setelah','assets/sounds/wudhu/setelah.mp3');
      this.medias.preLoad('membasuh_telapak_tangan','assets/sounds/wudhu/Doa_ketika_membasuh_telapak_tangan.mp3');
      this.medias.preLoad('berkumur','assets/sounds/wudhu/Doa_saat_berkumur.mp3');
      this.medias.preLoad('hidung','assets/sounds/wudhu/Doa_ketika_menghirup_air_ke_hidung.mp3');
      this.medias.preLoad('muka','assets/sounds/wudhu/Doa_ketika_membasuh_muka.mp3');
      this.medias.preLoad('tangan','assets/sounds/wudhu/Doa_ketika_membasuh_tangan_kanan.mp3');
      this.medias.preLoad('kepala','assets/sounds/wudhu/Doa_membasuh_rambut_kepala.mp3');
      this.medias.preLoad('telinga','assets/sounds/wudhu/Doa_ketika_membasuh_kedua_telinga.mp3');
      this.medias.preLoad('kaki','assets/sounds/wudhu/Doa_ketika_membasuh_kaki_kanan.mp3');
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WudhuPage');
  }

  ionViewWillLeave(){

  this.medias.unLoad('sebelum');
  this.medias.unLoad('setelah');
   
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
