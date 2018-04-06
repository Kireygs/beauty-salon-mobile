import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import { NewsDetailPage } from '../news-detail/news-detail';
import { News } from '../../providers/news.model';



@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  items: News;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private newsProvider: NewsProvider) {
    this.newsProvider.getNews().subscribe(data => { 
      this.items = data;
    });
  }

  itemSelected(item: News) {
    this.newsProvider.selected = item;
    this.navCtrl.push(NewsDetailPage);
  }



}
