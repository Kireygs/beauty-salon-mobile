import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from '../news.model';


@Injectable()
export class NewsProvider {

  selected: News = new News();

  constructor(public http: HttpClient) {}


  getNews() {
    let url = 'http://188.225.25.159:3005/api/news';
    return this.http.get<News>(url);
  }

}
