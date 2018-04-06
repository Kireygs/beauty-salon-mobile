import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController, MenuController, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AboutusPage } from '../pages/aboutus/aboutus';
import { NewsPage } from '../pages/news/news';
import { RequestsPage } from '../pages/requests/requests';
import { ReviewsPage } from '../pages/reviews/reviews';
import { ServicesPage } from '../pages/services/services';
import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = (localStorage.getItem("login") == null) ? LoginPage : ServicesPage;

  pages: Array<{title: string, component: any}>;

  user: any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    public alertCtrl: AlertController, public menuCtrl: MenuController, public app: App) {
    this.initializeApp();
    this.user = JSON.parse(localStorage.getItem("login"));

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Мои заявки', component: RequestsPage },
      { title: 'Услуги', component: ServicesPage },
      { title: 'Новости и акции', component: NewsPage },
      { title: 'Отзывы', component: ReviewsPage },
      { title: 'Про нас', component: AboutusPage }

    ];

  }

  logOutAlert(){
      let alert = this.alertCtrl.create({
        title: 'Выход',
        subTitle: 'Вы действительно хотите выйти с личного кабинета?',
        buttons: [
          {
            text: 'Отмена',
            handler: data => {
              console.log('Cancel clicked');
          
            }
            },
            {
              text: 'Да',
              handler: data => {
                this.logoutClicked();
              }
            }
          ]
        });
      alert.present();
    }

    logoutClicked() {
      localStorage.removeItem("login");
      console.log(localStorage);
      this.menuCtrl.close();
      var nav = this.app.getRootNav();
      nav.setRoot(LoginPage);
    }
    
    
    
 

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
