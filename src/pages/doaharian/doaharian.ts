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

  inputs:string;
  listdoa:any;
  listGambar:any;
  valdoa:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.setDoa();
  }

  setDoa(){
    this.listdoa = [
      'Doa Sebelum Tidur',
      'Doa Bangun Tidur',
      'Doa Keluar Rumah',
      'Doa Masuk Rumah',
      'Doa Masuk Kamar Mandi',
      'Doa Keluar Kamar Mandi',
      'Doa Sebelum Makan',
      'Doa Sesudah Makan'
    ]
   
   this.listGambar = [
     '../../assets/imgs/adab-sebelum-tidur.jpg',
     '../../assets/imgs/bangun_tidur.jpg',
     '../../assets/imgs/doa_keluar_rumah.jpg',
     '../../assets/imgs/doa_masuk_rumah.jpg',
     '../../assets/imgs/masuk_kamar_mandi.jpg',
     '../../assets/imgs/keluar_kamar_mandi.png',
     '../../assets/imgs/ngaji3.jpg',
     '../../assets/imgs/ngaji3.jpg'     
   ]
   
    console.log(this.listdoa[0])
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoaharianPage');
  }

  Go(param){

    this.navCtrl.push(DoaHarianExtendPage,{goto:param})

  }

  getItems(ev: any){

     // Reset items back to all of the items
     this.setDoa();

     // set val to the value of the searchbar
     const val = ev.target.value;
 
     // if the value is an empty string don't filter the items
     if (val && val.trim() != '') {
       this.listdoa = this.listdoa.filter((item) => {
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
