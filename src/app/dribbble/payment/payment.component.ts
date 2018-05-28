import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  groceries = [
    {
      item: "Gula",
      price: "5"
    },
    {
      item: "Garam",
      price: "3"
    },
    {
      item: "Beras",
      price: "20"
    },
    {
      item: "Bawang",
      price: "2"
    }
  ];

}
