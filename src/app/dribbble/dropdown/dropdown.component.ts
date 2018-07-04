import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../_services/country/country.service';
import { DateService } from '../../_services/date/date.service';
import { Country } from '../../_services/country/country';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [CountryService, DateService]
})
export class DropdownComponent implements OnInit {

  countries: Country[];
  days: any;
  months: any;
  years: any;

  constructor(private countryService: CountryService, dateService: DateService) { 
    this.countries = countryService.getCountries();
    this.days = dateService.getDay();
    this.months = dateService.getMonth();
    this.years = dateService.getYear();  
  }

  ngOnInit() {

  }

}
