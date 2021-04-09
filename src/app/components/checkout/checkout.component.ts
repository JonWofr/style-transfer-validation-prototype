import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

// Necessary to access the global variable paypal which is defined by the paypal script
declare var paypal: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  // static: true ensures that the ViewChild can alredy be referenced at ngOnInit
  @ViewChild('paypalButtonsContainer', { static: true })
  paypalButtonsContainer: ElementRef;

  constructor(private router: Router, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.renderPaymentButtons();
  }

  renderPaymentButtons(): void {
    paypal
      .Buttons({
        createOrder: this.createOrder.bind(this),
        onApprove: this.onApprove.bind(this),
        onCancel: this.onCancel.bind(this),
        onError: this.onError.bind(this),
      })
      .render(this.paypalButtonsContainer.nativeElement);
  }

  async createOrder() {
    try {
      const response: any = await this.httpClient
        .post(
          'http://localhost:5001/petai-validation/us-central1/api/payments/create-order',
          {}
        )
        .toPromise();
      return response.id;
    } catch (err) {
      console.error('An error occurred trying to create the order', err);
      this.router.navigateByUrl('payment-failure');
    }
  }

  // Error handler for when the user closes the popup or cancels the payment
  async onApprove(data: any, actions: any) {
    try {
      await this.httpClient
        .post(
          'http://localhost:5001/petai-validation/us-central1/api/payments/capture-order',
          {
            orderID: data.orderID,
          }
        )
        .toPromise();
      // Error handler for funding failures (e.g. the transaction exceeds the card limit)
      this.router.navigateByUrl('payment-success');
    } catch (err) {
      console.log('Error during http request', err);
      this.router.navigateByUrl('payment-failure');
    }
  }

  onCancel() {
    console.error('Canceled the payment');
    this.router.navigateByUrl('payment-failure');
  }

  // Error handler for when no specific error handler could be called
  onError(err: any) {
    console.error('An error occurred trying to capture the order', err);
    this.router.navigateByUrl('payment-failure');
  }
}
