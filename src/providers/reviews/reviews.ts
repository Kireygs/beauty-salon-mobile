import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Reviews } from '../reviews.model';


@Injectable()
export class ReviewsProvider {

  selected: Reviews = new Reviews();

  private host: string = 'http://188.225.25.159:3005/api/reviews';

  constructor(public http: HttpClient, public http1: Http) {}

  getReviews() {
    let filter = {
      "order": "id DESC"}
    let url = 'http://188.225.25.159:3005/api/reviews?filter='+JSON.stringify(filter);
    return this.http.get<Reviews>(url);
  }

      private catchError(error: Response | any) {
        console.log(error);
        return Observable.throw(error.json.error || "Server error.");
      }

      private logResponse(res: Response) {
          console.log();
      }

      private extractData(res: Response) {
          return res.json();
      }

      addReview(report: Reviews) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http1.post(this.host, JSON.stringify(report), { headers: headers })
        .do(this.logResponse)
        .map(this.extractData)
        .catch(this.catchError);
      }




      getReviewsBySpec(spec: string) {
        let filter = {
          where: {
            spec: spec
          }
        };
        let url = 'http://188.225.25.159:3005/api/reviews?filter='+JSON.stringify(filter);
        return this.http.get<Reviews>(url);
      }

}
