import { Injectable } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio';
import { Platform } from 'ionic-angular';



/*
  Generated class for the MediaPlayProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaPlayProvider {

  constructor(public nativeAudio: NativeAudio,public platform:Platform) {
    console.log('Hello MediaPlayProvider Provider');
  }

  play(param){
    this.nativeAudio.play(param,(res)=>{this.stop(param)}).then(function() {
  }, function(err) {
    alert("error playing audio: " + err);
  });
  }

  stop(param){
    this.nativeAudio.stop(param).then(function() {
      // alert(stop+' '+param)
  }, function(err) {
    alert("error playing audio: " + err);
  });

  }

  preLoad(id,path){
        // 'trackID' can be anything
        this.nativeAudio.preloadComplex(id, path, 1, 1, 0).then(function() {
          // alert("audio loaded!");
        }, function(err) {
        alert("audio failed: " + err);
        });      
  }

  unLoad(id){
    // This is used to unload the track. It's useful if you're experimenting with track locations
    this.nativeAudio.unload(id).then(function() {
      console.log("unloaded audio!");
    }, function(err) {
        console.log("couldn't unload audio... " + err);
    });
  }

}
