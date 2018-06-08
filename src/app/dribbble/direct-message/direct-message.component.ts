import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct-message',
  templateUrl: './direct-message.component.html',
  styleUrls: ['./direct-message.component.scss']
})
export class DirectMessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var collapse = document.getElementsByClassName("collapse");
    var n;

    for ( n = 0; n < collapse.length; n++ ) {
      collapse[n].addEventListener("click", function(){
        this.classList.toggle("active");
        var content = this.previousElementSibling;
        
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      })
    }
  }

}
