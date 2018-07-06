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
      // Popup-Toggle
      $(".fa-cog").click(function(){
        $(".pop-up-container").slideToggle();
      });
      $(".btn-cancel").click(function(){
        $(".pop-up-container").slideToggle();
      });
      
      // Show Checkbox Password
      $("#toggle-cb").click(function(){
        let changer = $('#netpassword')[0];
        if (changer.type === "password") {
          changer.type = "text";
        } else {
          changer.type = "password";
        }
      });
    });
  }
}
