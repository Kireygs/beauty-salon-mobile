import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Requests } from '../../providers/request.model';
import { RequestsProvider } from '../../providers/requests/requests';
import { RequestDetailPage } from '../request-detail/request-detail';
import { Specialists } from '../../providers/specialist.model';



@IonicPage()
@Component({
  selector: 'page-requests',
  templateUrl: 'requests.html',
})
export class RequestsPage {

  items: Requests;
  type: string = 'waitings';
  waitings: Requests;
  done: Requests;
  end: Requests;
  specialists: Specialists;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private requestsProvider: RequestsProvider, public toastCtrl: ToastController) {
    this.requestsProvider.getSpecialistByLogin("valentina").subscribe(data=>{
      this.specialists = data
    });
    
    /* this.requestsProvider.getRequests().subscribe(data => { 
      this.items = data;
    }); */

    this.getData();
    this.presentToast();
  }

  getData() {
    this.requestsProvider.getRequestsByStatus('Ожидается').subscribe(data => {
      this.waitings = data;
    });

    this.requestsProvider.getRequestsByStatus('Подтверждено').subscribe(data => {
      this.done = data;
    });

    this.requestsProvider.getRequestsByStatus('Выполнено').subscribe(data => {
      this.end = data;
    });
  }


  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      this.getData();
      refresher.complete();
    }, 2000);
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Смахните вниз чтобы обновить',
      duration: 3000
    });
    toast.present();
  }




  itemSelected(item: Requests) {
    this.requestsProvider.selected = item;
    this.navCtrl.push(RequestDetailPage);
  }


}
