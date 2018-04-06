import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { NewsPage } from '../pages/news/news';
import { RequestsPage } from '../pages/requests/requests';
import { ReviewsPage } from '../pages/reviews/reviews';
import { ServicesPage } from '../pages/services/services';
import { SpecsPage } from '../pages/specs/specs';
import { SpecialistProvider } from '../providers/specialist/specialist';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HairDetailPage } from '../pages/hair-detail/hair-detail';
import { ModalPage } from '../pages/modal/modal';
import { RequestsProvider } from '../providers/requests/requests';
import { Http, Headers, Response, HttpModule} from '@angular/http';
import { RequestDetailPage } from '../pages/request-detail/request-detail';
import { ProfileProvider } from '../providers/profile/profile';
import { LoginPage } from '../pages/login/login';
import { ReviewsProvider } from '../providers/reviews/reviews';
import { NewsProvider } from '../providers/news/news';
import { NewsDetailPage } from '../pages/news-detail/news-detail';
import { ReviewsDetailPage } from '../pages/reviews-detail/reviews-detail';

@NgModule({
  declarations: [
    MyApp,
    AboutusPage,
    NewsPage,
    RequestsPage,
    ReviewsPage,
    ServicesPage,
    SpecsPage,
    HairDetailPage,
    ModalPage,
    RequestDetailPage,
    LoginPage,
    NewsDetailPage,
    ReviewsDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutusPage,
    NewsPage,
    RequestsPage,
    ReviewsPage,
    ServicesPage,
    SpecsPage,
    HairDetailPage,
    ModalPage,
    RequestDetailPage,
    LoginPage,
    NewsDetailPage,
    ReviewsDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpecialistProvider,
    RequestsProvider,
    ProfileProvider,
    ReviewsProvider,
    NewsProvider
  ]
})
export class AppModule {}
