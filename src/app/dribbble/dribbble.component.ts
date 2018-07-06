import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
    selector: 'app-dribbble',
    templateUrl: './dribbble.component.html',
    styleUrls: ['./dribbble.component.css']
})
export class DribbbleComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    // $(".toggle").click(function(){
    //     $("#sidebar-fixed").slideToggle();
    //     });
    }

    goToShowcase() {
        this.router.navigate(['/showcase']);
    }
}
