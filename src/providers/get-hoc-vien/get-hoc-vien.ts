import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GetHocVienProvider {

  constructor(public http: HttpClient) {
  }

  getHocVien(){
    const url = 'https://dinh-server.herokuapp.com/hocvien2';
    return this.http.get(url)
    .toPromise()
    .then(res => res);
  }

}
