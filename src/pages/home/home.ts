import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersPage } from './../users/users';
import { HocvienPage } from '../hocvien/hocvien';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {

  }
  onNavigateToUsers(){
    this.navCtrl.push(UsersPage);
  }

  onListHocVien(){
    this.navCtrl.push(HocvienPage);
  }

}
