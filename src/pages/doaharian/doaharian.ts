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
  valdoa:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.setDoa();
  }

  setDoa(){
    this.listdoa = [{
      name : [
        'Doa Sebelum Tidur',
        'Doa Bangun Tidur'
      ],
      value : [
        'sebelum_tidur',
        'bangun_tidur'
      ]
    }]
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
