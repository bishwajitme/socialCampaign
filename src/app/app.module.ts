import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Screenshot } from '@ionic-native/screenshot';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { File } from '@ionic-native/file';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from "@ionic/storage";

import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import {GiftcardPage} from "../pages/giftcard/giftcard";
import {GiftcardsPage} from "../pages/giftcards/giftcards";
import {PlacesService} from "../services/gift";
import {SocialSharing} from "@ionic-native/social-sharing";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        GiftcardPage,
        GiftcardsPage
    ],
    imports: [
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot(),
        NgxQRCodeModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        GiftcardPage,
        GiftcardsPage
    ],
    providers: [
        SocialSharing,
        StatusBar,
        SplashScreen,
        Screenshot,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        BarcodeScanner,
        File,
        PlacesService
    ]
})
export class AppModule {}