import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import {GiftcardPage} from '../giftcard/giftcard';
import { AlertController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    qrData = null;
    createdCode = null;
    scannedCode = null;

    constructor(private barcodeScanner: BarcodeScanner, private navCtrl: NavController,
                private alertCtrl: AlertController,
                ) { }

    scanCode() {
        this.barcodeScanner.scan().then(barcodeData => {
            this.scannedCode = barcodeData.text;
            if(this.scannedCode ==='123456'){
            this.navCtrl.push(GiftcardPage);
            }
            else{
                let alert = this.alertCtrl.create({
                    title: 'Wrong QR CODE',
                    message: 'Either you have already used this code or you are using wrong QR code',
                    buttons: [
                        {
                            text: 'Try Again',
                            role: 'cancel',
                            handler: () => {
                                console.log('Cancel clicked');
                            }
                        }
                    ]
                });
                alert.present();
            }
        }, (err) => {
            console.log('Error: ', err);
        });
    }

}