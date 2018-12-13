import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GetHocVienProvider {

  constructor(public http: HttpClient) {
    console.log('Hello GetHocVienProvider Provider');
  }

  getHocVien(){
    const url = 'https://dinh-server.herokuapp.com/hocvien2';
    return this.http.get(url)
    .toPromise()
    .then(res => res);
  }

}
