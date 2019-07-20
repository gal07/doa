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
