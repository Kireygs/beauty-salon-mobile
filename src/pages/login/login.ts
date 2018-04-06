import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile';
import { ServicesPage } from '../services/services';
import { SpecialistProvider } from '../../providers/specialist/specialist';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username: string = '';
  password: string = '';

  log = [
    {name: 'Специалист'},
    {name: 'Пользователь'},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private loginProvider: ProfileProvider, private alertCtrl: AlertController,
  public loadingCtrl: LoadingController, specialistProvider: SpecialistProvider) {
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Введите заново',
      subTitle: 'Логин или пароль введен не правильно',
      buttons: ['Ок']
    });
    alert.present();
  }


  signIn() {
    this.loginProvider.loginByUsernameAndPassword({"where":{"and":[{"login": this.username},{"password": this.password}]}})
      .subscribe(data => {
        if (data[0] && data[0].login == this.username && data[0].password == this.password) {
          localStorage.setItem("login", JSON.stringify(data[0]));
          this.navCtrl.setRoot(ServicesPage);
        }else{
          this.presentAlert();
          console.log("ERROR");
        }
      });
  }

  


}
