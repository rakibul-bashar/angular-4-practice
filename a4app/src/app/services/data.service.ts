import { Injectable } from '@angular/core';
import {Http} from '@angular/http';//define manually
import 'rxjs/add/operator/map';//define manually

@Injectable()
export class DataService {

  constructor(public http:Http) {
      console.log("DataService is connected")
  }
  getposts(){
      return this.http.get('https://jsonplaceholder.typicode.com/posts')

      .map(res => res.json());//get the response of json objects.

  }

}
