import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../_services/country/country.service';

@Component({
  selector: 'app-jsplay',
  templateUrl: './jsplay.component.html',
  styleUrls: ['./jsplay.component.scss'],
  providers: [CountryService]
})
export class JsplayComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() {

  }


}
