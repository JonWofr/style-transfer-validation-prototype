import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  NgZone,
} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Item } from 'src/app/models/item.model';
import { ClientOrdersCreateRequest } from 'src/app/models/client-orders-create-request';
import { ClientOrdersCaptureRequest } from 'src/app/models/client-orders-capture-request';

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

  items: Item[] = [];
  totalPrice = 0;

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private ngZone: NgZone
  ) {}

  async ngOnInit(): Promise<void> {
    const stringifiedItems = localStorage.getItem('items');
    if (!stringifiedItems) {
      await this.router.navigateByUrl('');
      return;
    }
    this.items = JSON.parse(stringifiedItems);
    this.updateTotalPrice();
    this.renderPaymentButtons();
  }

  updateTotalPrice() {
    let totalPrice = 0;
    this.items.forEach((item) => {
      totalPrice += item.quantity * item.product.price;
    });
    this.totalPrice = totalPrice;
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
    const body: ClientOrdersCreateRequest = {
      items: this.items.filter((item) => item.quantity > 0),
    };
    const response: any = await this.httpClient
      .post(
        'http://localhost:5001/petai-validation/us-central1/api/payments/create-order',
        body
      )
      .toPromise();
    return response.id;
  }

  async onApprove(data: any, actions: any) {
    const body: ClientOrdersCaptureRequest = {
      orderId: data.orderID,
      items: this.items.filter((item) => item.quantity > 0),
    };
    const response: any = await this.httpClient
      .post(
        'http://localhost:5001/petai-validation/us-central1/api/payments/capture-order',
        body
      )
      .toPromise();

    // Error handler for funding failures (e.g. the transaction exceeds the card limit or the issuer rejects the payment)
    if (response.error === 'INSTRUMENT_DECLINED') {
      return actions.restart();
    }

    this.ngZone.run(() => this.router.navigateByUrl('payment-success'));
  }

  // Error handler for when the user cancels during the payment process
  onCancel() {
    console.warn('Canceled the payment');
  }

  // Error handler for when an error occurrs in the createOrder or onApprove callback method and no other, more specific error handler could be found
  onError(err: any) {
    this.ngZone.run(() => this.router.navigateByUrl('payment-failure'));
  }
}
