import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { NativeAudio } from '@ionic-native/native-audio';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AlquranPage } from './../pages/alquran/alquran';
import { DoaharianPage } from './../pages/doaharian/doaharian';
import { SholatPage } from './../pages/sholat/sholat';
import { WudhuPage } from './../pages/wudhu/wudhu';
import { DoaHarianExtendPage } from "../pages/doa-harian-extend/doa-harian-extend";
import { MediaPlayProvider } from '../providers/media-play/media-play';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlquranPage,
    DoaharianPage,
    SholatPage,
    WudhuPage,
    DoaHarianExtendPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AlquranPage,
    DoaharianPage,
    SholatPage,
    WudhuPage,
    DoaHarianExtendPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NativeAudio,
    MediaPlayProvider
  ]
})
export class AppModule {}
