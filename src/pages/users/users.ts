import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  public users = ["1", "2", "3", "4", "5", "6"];
  public usersFresh = ["7a", "8a", "9a", "10a"];

  constructor(public navCtrl: NavController, private httpClient: HttpClient, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  goHome() {
    this.navCtrl.pop();
  }

  reorderItems(index) {
    let element = this.users[index.from];
    this.users.splice(index.from, 1);
    this.users.splice(index.to, 0, element);
  }

  doRefresh(refresher) {
    this.users = this.usersFresh;
    setTimeout(() => {
      refresher.complete();
    }, 500);
  }

  doInfinite(event) {
    setTimeout(() => {
      for (let i = 0; i < 3; i++) {
        this.users.push("a" + i);
      }
      event.complete();
    }, 500);
  }

}
