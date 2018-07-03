import { Injectable } from '@angular/core';

@Injectable()
export class DayService {

  constructor() { }

  getDay () {
    let day = [];
    let n;

    for (n = 1; n < 32; n++ ) {
      day.push(n);
    }
  }

}
