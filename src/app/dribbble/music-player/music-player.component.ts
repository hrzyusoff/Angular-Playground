import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('input[type="range"]').rangeslider({
      polyfill : false,
      onInit : function() {
          this.output = $( '<div class="range-output" />' ).insertAfter( this.$range ).html( this.$element.val() );
      },
      onSlide : function( position, value ) {
          this.output.html( value );
      }
    });
  }
}
