import { Injectable } from '@angular/core';

@Injectable()
export class DateService {

  constructor() { }

  getDay () {
    let day = [];
    let n;

    for (n = 1; n < 32; n++ ) {
      day.push(n);
    }
    return day;
  }

  getMonth() {
    let month = ['January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    return month;
  }

  getYear() {
    let initialYear = 1970;
    let getyear = new Date();
    let currentYear = getyear.getFullYear();
    let year = [];
    let n;

    for (n = initialYear; n <= currentYear; n++) {
      year.push(n);
    }

    return year;

  }

}
