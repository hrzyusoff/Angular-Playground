import { Injectable } from '@angular/core';
import { PHONECODE } from '../phonecode/phone-code-list';

@Injectable()
export class PhoneCodeService {

  getPhoneCodes() {
    return PHONECODE;
  }

}
