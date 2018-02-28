import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';
import { PlacesService } from "../../services/gift";
import { File, Entry, FileError } from '@ionic-native/file';
import {GiftcardsPage} from "../giftcards/giftcards";



/**
 * Generated class for the GiftcardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var cordova: any;
@IonicPage()
@Component({
  selector: 'page-giftcard',
  templateUrl: 'giftcard.html',
})
export class GiftcardPage {
    qrData = null;
    createdCode = null;
    screen: any;
    state: boolean = false;
    stShow: boolean = true;
    imageUrl = '';
    giftCardNumber = '';
    constructor(public navCtrl: NavController, public navParams: NavParams, private screenshot: Screenshot,
                private placesService: PlacesService,
                private file: File,
                ) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad GiftcardPage');
    }

    createCode() {
        this.giftCardNumber = this.qrData.trim() + Math.floor((Math.random() * 10000000) + 1);
        this.createdCode = this.giftCardNumber;
        this.hideNav();
        this.reset();

    }

    hideNav() {
        var self = this;
        setTimeout(function () {
            self.stShow = false;
        }, 1000);
    }
    reset() {
        var self = this;
        setTimeout(function () {
            self.stShow = false;
            self.screenShotURI();
        }, 2000);
    }

    screenShot() {
        this.stShow = false;
        this.screenshot.save('jpg', 100, 'myscreenshot').then(res => {
            this.screen = res.filePath;
            this.state = true;
            //this.screenShotURI();

            const currentName = this.screen.replace(/^.*[\\\/]/, '');
            const path = this.screen.replace(/[^\/]*$/, '');
            const newFileName = new Date().getUTCMilliseconds() + '.jpg';
            console.log('Path: '+ path+' dd:'+ currentName);
            console.log('dir: '+ cordova.file.dataDirectory);
            this.file.moveFile(path, currentName, cordova.file.dataDirectory, newFileName)
                .then(
                    (data: Entry) => {
                        // this.imageUrl = normalizeURL(data.nativeURL);
                        this.imageUrl = data.nativeURL;
                        console.log('Place Two: ' + this.imageUrl);

                        // File.removeFile(path, currentName);
                    }
                )
                .catch(
                    (err: FileError) => {
                        console.log(err);
                    }
                );
            this.imageUrl = this.screen;
            this.onSubmit();
            //this.reset();
        });
    }

    screenShotURI() {
        this.screenshot.URI(80).then(res => {
            this.screen = res.URI;
            this.state = true;
            this.stShow = false;
            const currentName = this.screen.replace(/^.*[\\\/]/, '');
            const path = this.screen.replace(/[^\/]*$/, '');
            const newFileName = new Date().getUTCMilliseconds() + '.jpg';
            console.log('Path: '+ path+' dd:'+ currentName);
            console.log('dir: '+ cordova.file.dataDirectory);
            this.file.moveFile(path, currentName, cordova.file.dataDirectory, newFileName)
                .then(
                    (data: Entry) => {
                        // this.imageUrl = normalizeURL(data.nativeURL);
                        this.imageUrl = data.nativeURL;
                        console.log('Place Two: ' + this.imageUrl);

                        // File.removeFile(path, currentName);
                    }
                )
                .catch(
                    (err: FileError) => {
                        console.log(err);
                    }
                );
            this.imageUrl = this.screen;
            this.onSubmit();
            //this.reset();
        });
    }

    onSubmit() {
        this.placesService
            .addPlace('Gift Card', 'Enjoy Discount at ABC Company',  this.screen);

    }
    goToOtherPage() {
        //push another page onto the history stack
        //causing the nav controller to animate the new page in
        this.navCtrl.push(GiftcardsPage);
    }

}