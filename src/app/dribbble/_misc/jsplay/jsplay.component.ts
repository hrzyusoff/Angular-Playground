import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../../_services/country/country.service';
import { DateService } from '../../../_services/date/date.service';
import { Country } from '../../../_services/country/country';

@Component({
  selector: 'app-jsplay',
  templateUrl: './jsplay.component.html',
  styleUrls: ['./jsplay.component.scss'],
  providers: [CountryService, DateService]
})
export class JsplayComponent implements OnInit {

  countries: Country[];
  days: any;

  constructor(private countryService: CountryService, dayService: DateService) { 
    this.countries = countryService.getCountries();
    this.days = dayService.getDay();
  }

  ngOnInit() {
    let day = [];
    let n;

    for (n = 1; n < 32; n++) {
      day.push(n);
      console.log(day);
      this.days = day;
    }
  }


}
