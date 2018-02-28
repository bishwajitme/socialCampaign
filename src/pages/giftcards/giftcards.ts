import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

//import { ModalController } from 'ionic-angular';
//import { AddPlacePage } from "../add-place/add-place";
import { Place } from "../../models/giftmodel";
import { PlacesService } from "../../services/gift";
//import { PlacePage } from "../place/place";
import { AlertController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import {Platform} from "ionic-angular";
import {HomePage} from "../home/home";

/**
 * Generated class for the GiftcardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-giftcards',
  templateUrl: 'giftcards.html',
})
export class GiftcardsPage  implements OnInit {
    //addPlacePage = AddPlacePage;
    places: Place[] = [];
    index: number;

    constructor(private placesService: PlacesService,
                private alertCtrl: AlertController,
                private socialSharing: SocialSharing,
                private platform: Platform,
                public navCtrl: NavController
                ) {

    }

    ngOnInit() {
        this.placesService.fetchPlaces()
            .then(
                (places: Place[]) => this.places = places
            );
    }

    ionViewWillEnter() {
        this.places = this.placesService.loadPlaces();
    }
    onDelete() {
        this.placesService.deletePlace(this.index);

    }
    presentConfirm() {
        let alert = this.alertCtrl.create({
            title: 'Delete this Item',
            message: 'Do you want to delete this memory?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Delete',
                    handler: () => {
                        this.onDelete();
                        console.log('Item Deleted');
                    }
                }
            ]
        });
        alert.present();
    }
    sharetweets(message, image)
    {
        console.log(image);
        this.platform.ready()
            .then(() =>
            {
                //this.socialSharing.shareViaFacebook( message, image, message)
                this.socialSharing.share(message, message, image, null)
                    .then((data) =>
                    {
                        console.log('Shared');
                    })
                    .catch((err) =>
                    {
                        console.log('Was not shared');
                    })


            });

    }
    goToOtherPage() {
        //push another page onto the history stack
        //causing the nav controller to animate the new page in
        this.navCtrl.push(HomePage);
    }
}