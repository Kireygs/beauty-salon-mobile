import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { News } from '../../providers/news.model';
import { NewsProvider } from '../../providers/news/news';


@IonicPage()
@Component({
  selector: 'page-news-detail',
  templateUrl: 'news-detail.html',
})
export class NewsDetailPage {

  item: News;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private newsProvider: NewsProvider) {
    this.item = this.newsProvider.selected;
  }



}
