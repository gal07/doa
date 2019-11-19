import { AlquranExtendPage } from './../alquran-extend/alquran-extend';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AlquranPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alquran',
  templateUrl: 'alquran.html',
})
export class AlquranPage {

  list:any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.setlist()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlquranPage');
  }

  setlist(){
    this.list = [
      'Adh-Dhuhaa',
      'Al-Aadiyaat',
      'Al-Ashr',
      'Al-Ikhlas',
      'Al-Kaafirun',
      'Al-Kautsar',
      'Al-Lahab',
      'Al-Mauun',
      'Al-Qadr',
      'Al-Quraisy'
    ]
  }

  Go(param){

    this.navCtrl.push(AlquranExtendPage,{goto:param})

  }

  getItems(ev: any){

    // Reset items back to all of the items
    this.setlist();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.list = this.list.filter((item) => {
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
