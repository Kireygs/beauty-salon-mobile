import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpecsPage } from '../specs/specs';
import { SpecialistProvider } from '../../providers/specialist/specialist';
import { Specialists } from '../../providers/specialist.model';


@IonicPage()
@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private specProvider: SpecialistProvider
  ) {
  }

  openPageSpecs(spec: string) {
    this.specProvider.spec = spec;
    this.navCtrl.push(SpecsPage);
  }


  

  // ionViewDidLoad() {
  //   this.$state.reload()
  //   console.log("'ionViewDidLoad ExercisedetailPage'");
  // }
}
