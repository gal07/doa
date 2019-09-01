import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { NativeAudio } from '@ionic-native/native-audio';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AlquranPage } from './../pages/alquran/alquran';
import { DoaharianPage } from './../pages/doaharian/doaharian';
import { SholatExtendPage } from './../pages/sholat-extend/sholat-extend';
import { SholatPage } from './../pages/sholat/sholat';
import { WudhuPage } from './../pages/wudhu/wudhu';
import { DoaHarianExtendPage } from "../pages/doa-harian-extend/doa-harian-extend";
import { MediaPlayProvider } from '../providers/media-play/media-play';
import { OnOrOffProvider } from '../providers/on-or-off/on-or-off';

export const firebaseConfig = {
  apiKey: "AIzaSyC7Hi9Ft_K0MmOdbP6tsg5YksP4F6nORHE",
  authDomain: "fir-crud-7f287.firebaseapp.com",
  databaseURL: "https://fir-crud-7f287.firebaseio.com",
  projectId: "fir-crud-7f287",
  storageBucket: "fir-crud-7f287.appspot.com",
  messagingSenderId: "148921659125"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlquranPage,
    DoaharianPage,
    SholatPage,
    WudhuPage,
    DoaHarianExtendPage,
    SholatExtendPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AlquranPage,
    DoaharianPage,
    SholatPage,
    WudhuPage,
    DoaHarianExtendPage,
    SholatExtendPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NativeAudio,
    MediaPlayProvider,
    AngularFireDatabase,
    OnOrOffProvider
  ]
})
export class AppModule {}
