import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.scss'],
})
export class PaymentSuccessComponent implements OnInit {
  userEmail: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userEmail = this.route.snapshot.queryParamMap.get('userEmail');
  }
}
