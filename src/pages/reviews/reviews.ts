import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ReviewsProvider } from '../../providers/reviews/reviews';
import { Reviews } from '../../providers/reviews.model';
import { RequestsProvider } from '../../providers/requests/requests';
import { Specialists } from '../../providers/specialist.model';
import { SpecialistProvider } from '../../providers/specialist/specialist';
import { ReviewsDetailPage } from '../reviews-detail/reviews-detail';


@IonicPage()
@Component({
  selector: 'page-reviews',
  templateUrl: 'reviews.html',
})
export class ReviewsPage {

  items: Reviews;

  forSelectSpecs;


  


  constructor(public navCtrl: NavController, public navParams: NavParams,
  private reviewsProvider: ReviewsProvider, private requestProvider: RequestsProvider,
  private specialistsProvider: SpecialistProvider, public alertCtrl: AlertController) {
    this.reviewsProvider.getReviews().subscribe(data => { 
      this.items = data;
      // console.log(data);
    });

    this.specialistsProvider.getSpecialists().subscribe(data => {
      this.forSelectSpecs = data;
      console.log(data);
    })
  }


  selectedSpec(selectedValue: any) {
    this.reviewsProvider.getReviewsBySpec(selectedValue).subscribe(data => {
      this.items = data;
    });
  }


  showAlert(item) {
    let alert = this.alertCtrl.create({
      title: item.service,
      subTitle: `Отзыв: ${item.title}`,
      message:  `Автор отзыва: ${item.author}`,

      buttons: ['Ок']
    });
    alert.present();
  }

  itemSelected(item: Reviews) {
    this.reviewsProvider.selected = item;
    this.navCtrl.push(ReviewsDetailPage);
  }





}
