import { Injectable } from '@angular/core';
import { COUNTRY } from '../country/country-list';

@Injectable()
export class CountryService {

  // getCountries$;

  getCountries() {
    return COUNTRY;
  }
}
