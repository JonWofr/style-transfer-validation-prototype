import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CreateComponent } from './components/create/create.component';
import { ProductViewDetailComponent } from './components/product-view-detail/product-view-detail.component';
import { ProductViewComponent } from './components/product-view/product-view.component';

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
    component: CheckoutComponent
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
