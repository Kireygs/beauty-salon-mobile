import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, LoadingController } from 'ionic-angular';
import { ServicesPage } from '../services/services';
import { HairDetailPage } from '../hair-detail/hair-detail';
import { Specialists } from '../../providers/specialist.model';
import { SpecialistProvider } from '../../providers/specialist/specialist';
import { Requests } from '../../providers/request.model';
import { RequestsProvider } from '../../providers/requests/requests';



@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {


  item: Specialists;

  toSave: Requests = {
    specialist: "",
    date: "2018-03-16",
    time: "12:00",
    service: "",
    status: "Ожидается"
  };
  constructor(public navCtrl: NavController,
  public navParams: NavParams, public viewCtrl: ViewController, 
  private specialistProvider: SpecialistProvider, private requestsProvider: RequestsProvider,
  public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    this.item = specialistProvider.selected;
    this.toSave.specialist = this.item.login;
  }


  addRequest() {
    this.requestsProvider.addRequest(this.toSave)   
    .subscribe(
      success => console.log(success),
      error => console.error(error)
    );
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Пожалуйста подождите...",
      duration: 2000
    });
    loader.present();
    this.showAlert();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Ваша заявка отправлена',
      buttons: ['Ок']
    });
    alert.present();
  }

 

}
