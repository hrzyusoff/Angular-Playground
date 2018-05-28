import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dribbble',
    templateUrl: './dribbble.component.html',
    styleUrls: ['./dribbble.component.css']
})
export class DribbbleComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    goToShowcase() {
        this.router.navigate(['/showcase']);
    }
}
