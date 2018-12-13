import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detail-hv',
  templateUrl: 'detail-hv.html',
})
export class DetailHvPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  hocvien = {};

  ionViewDidLoad() {
    this.hocvien = this.navParams.data;
  }

}
