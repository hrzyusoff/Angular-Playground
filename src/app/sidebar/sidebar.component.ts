import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor() { }

  // linkData = [
  //   {
  //     link: "signup",
  //     subtitlte: "Signup"
  //   },
  //   {
  //     link: "payment",
  //     subtitlte: "Payment"
  //   },
  //   {
  //     link: "landing-page",
  //     subtitlte: "Landing Page"
  //   },
  //   {
  //     link: "calculator",
  //     subtitlte: "Calculator"
  //   },
  //   {
  //     link: "app-icon",
  //     subtitlte: "App Icon"
  //   },
  //   {
  //     link: "user-profile",
  //     subtitlte: "User Profile"
  //   },
  //   {
  //     link: "setting",
  //     subtitlte: "Setting"
  //   },
  //   {
  //     link: "error-page",
  //     subtitlte: "Error Page"
  //   },
  //   {
  //     link: "music-player",
  //     subtitlte: "Music Player"
  //   },
  //   {
  //     link: "social-share",
  //     subtitlte: "Social Share"
  //   },
  //   {
  //     link: "flash-message",
  //     subtitlte: "Flash Message"
  //   },
  //   {
  //     link: "shop",
  //     subtitlte: "Shop"
  //   },
  //   {
  //     link: "direct-message",
  //     subtitlte: "Direct Message"
  //   },
  //   {
  //     link: "countdown-timer",
  //     subtitlte: "Countdown Timer"
  //   },
  // ];

  // Rotate Caret
  // expand(section){
  //   $( "ul" ).not(document.getElementById('collapse-'+section+'')).removeClass("show");
  // }

  // rotate(section){

  //     var classList = document.getElementById('rotate-'+section+'').className.split(/\s+/);
    
  //     for (var i = 0; i < classList.length; i++) {
  //       if (classList[i] === 'fa-chevron-down') {
  //           $('#rotate-'+section+'').removeClass('fa-chevron-up').addClass("fa-chevron-down");
  //       }

  //       if (classList[i] === 'fa-chevron-up') {
  //         $('#rotate-'+section+'').removeClass('fa-chevron-down').addClass('fa-chevron-up');
  //       }
  //     }
  // }

}