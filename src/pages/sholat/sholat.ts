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
  listSholat:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.setSholat()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SholatPage');
  }

  setSholat(){
    this.listSholat = [
      'Sholat Subuh',
      'Sholat Zuhur',
      'Sholat Ashar',
      'Sholat Maghrib',
      'Sholat Isya'
    ] 
  }

  Go(param){

    this.navCtrl.push(SholatExtendPage,{goto:param})

  }

  getItems(ev: any){

    // Reset items back to all of the items
    this.setSholat()


    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.listSholat = this.listSholat.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


 onInput(str){
  console.log(str.target.value)
 }

 onCancel(str){
   console.log(str.target.value)
 }

}
