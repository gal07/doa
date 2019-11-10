import { Component } from '@angular/core';
import { NavController,Platform} from 'ionic-angular';
import { WudhuPage } from './../wudhu/wudhu';
import { SholatPage } from './../sholat/sholat';
import { DoaharianPage } from './../doaharian/doaharian';
import { AlquranPage } from './../alquran/alquran';
import { AngularFireDatabase } from '@angular/fire/database';
import { OnOrOffProvider } from './../../providers/on-or-off/on-or-off';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController,public database:AngularFireDatabase, private onOff: OnOrOffProvider, platform: Platform) {

  
  }

  goTo(page){

    if(page == "wudhu"){

      this.navCtrl.push(WudhuPage)

    }
    if(page == "doa"){
      this.navCtrl.push(DoaharianPage)

    }
    if(page == "sholat"){
      this.navCtrl.push(SholatPage)

    }
    if(page == "alquran"){
      this.navCtrl.push(AlquranPage)

    }

  }

}
