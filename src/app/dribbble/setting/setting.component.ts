import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $(".fa-cog").click(function(){
        $(".pop-up-container").slideToggle();
      });
      $(".btn-cancel").click(function(){
        $(".pop-up-container").slideToggle();
      });
    });
  }

}
