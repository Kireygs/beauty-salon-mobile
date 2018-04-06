import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-aboutus',
  templateUrl: 'aboutus.html',
})
export class AboutusPage {

  slides = [
    {
      image: "/assets/imgs/salon1.jpg"
    },
    {
      image: "/assets/imgs/salon2.jpg"
    },
    {
      image: "/assets/imgs/salon3.jpg"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutusPage');
  }

}
