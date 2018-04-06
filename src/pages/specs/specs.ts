import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpecialistProvider } from '../../providers/specialist/specialist';
import { Specialists } from '../../providers/specialist.model';
import { HairDetailPage } from '../hair-detail/hair-detail';

@IonicPage()
@Component({
  selector: 'page-specs',
  templateUrl: 'specs.html',
})
export class SpecsPage implements OnInit {

  spec: string;
  specs: Specialists[];
  rating: number[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private specProvider: SpecialistProvider) {
    this.spec = this.specProvider.spec;
  }

ngOnInit() {
  this.specProvider
  .getSpecialistsBySpec(this.spec)
  .subscribe(data => {
    this.specs = data;
    for (let i=0; i< this.specs.length; i++) {
      let rating = [];
      for(let j=0; j<Number(this.specs[i].rating); j++) {
        rating.push(1);
      }
      this.specs[i].ratings = rating;
    }
  });
}

itemSelected(item: Specialists) {
  console.log(item);
  this.specProvider.selected = item;
  this.navCtrl.push(HairDetailPage);
}


}
