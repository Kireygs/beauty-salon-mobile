import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Requests } from '../../providers/request.model';
import { RequestsProvider } from '../../providers/requests/requests';
import { SpecialistProvider } from '../../providers/specialist/specialist';
import { Specialists } from '../../providers/specialist.model';
import { RequestsPage } from '../requests/requests';
import { Reviews } from '../../providers/reviews.model';
import { ReviewsProvider } from '../../providers/reviews/reviews';


@IonicPage()
@Component({
  selector: 'page-request-detail',
  templateUrl: 'request-detail.html',
})
export class RequestDetailPage implements OnInit {

  item: Requests;

  specialist: Specialists = {
    login: '',
    name: '',
    img: '',
    stars: '',
    rating: '',
    experience: '',
    mail: '',
    phone: '',
    service: {}
  };

  toSave: Reviews = {
    spec: "",
    title: "",
    author: "",
    service: ""
  };

  items: Specialists;
  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private requestsProvider: RequestsProvider, private specialistsProvider: SpecialistProvider,
  private reviewsProvider: ReviewsProvider, public alertCtrl: AlertController) {
    this.toSave.author = JSON.parse(localStorage.getItem("login")).name;
    this.item = requestsProvider.selected;
    this.items = specialistsProvider.selected;
  }

  addReview() {
    this.reviewsProvider.addReview(this.toSave)   
    .subscribe(
      success => console.log(success),
      error => console.error(error)
    );
  }
  
  ngOnInit() {
    this.requestsProvider.getSpecialistByLogin(this.item.specialist).subscribe(data=>{
      this.specialist = data[0];
      this.toSave.spec = this.specialist.name;
      this.toSave.service = this.item.service;
      console.log(this.item);
    });
  }

  cancelRequest(id: string){
    this.requestsProvider.deletRequest(id);
    this.navCtrl.setRoot(RequestsPage);
}

showAlert() {
  let alert = this.alertCtrl.create({
    title: "Ваш отзыв оставлен",
    subTitle: "Спасибо",
    buttons: ['Ок']
  });
  alert.present();
}

}
