import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Specialists } from '../../providers/specialist.model';
import { SpecialistProvider } from '../../providers/specialist/specialist';
import { ModalPage } from '../modal/modal';


@IonicPage()
@Component({
  selector: 'page-hair-detail',
  templateUrl: 'hair-detail.html',
})
export class HairDetailPage {

  item: Specialists;

  photos = [
    {
      img: 'https://www.w3schools.com/howto/img_fjords.jpg'
    },
    {
      img: 'https://cdn.pixabay.com/photo/2016/06/18/17/42/image-1465348_960_720.jpg'
    },
    {
      img: 'https://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg'
    },
    {
      img: 'http://carolinabirds.org/Images2LG/Owl,_Sooty_RichardFisher.jpg'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private hairProvider: SpecialistProvider, public modalCtrl: ModalController) {
    this.item = hairProvider.selected;
    console.log(this.photos);
  }

  presentModal() {
    let modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }

 
}
