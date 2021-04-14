import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CreateComponent } from './components/create/create.component';
import { PaymentFailureComponent } from './components/payment-failure/payment-failure.component';
import { ProductViewDetailComponent } from './components/product-view-detail/product-view-detail.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';

const routes: Routes = [
  {
    path: '',
    component: CreateComponent,
  },
  {
    path: 'product-view',
    component: ProductViewComponent,
  },
  {
    path: 'product-view/detail',
    component: ProductViewDetailComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path: 'payment-success',
    component: PaymentSuccessComponent,
  },
  {
    path: 'payment-failure',
    component: PaymentFailureComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
