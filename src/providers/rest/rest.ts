import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  private BaseURLAPI = "http://www.getbeauty.com.br/";

  constructor(public http: HttpClient) {
    //console.log('Hello RestProvider Provider');
  }

  // Exemplo funcional de GET
  getStationsStatus() {
    return new Promise(resolve => {
      this.http.get(this.BaseURLAPI + "api.php").subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  // Exemplo funcional de POST
  RequestAPIServer(data) {
   return new Promise((resolve, reject) => {
      //this.http.post(this.BaseURLAPI+'api.php', JSON.stringify(data))
      this.http.post(this.BaseURLAPI+'api.php', data /*, {responseType: 'text'}*/)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
     });
  }
}
