import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateModule } from './components/create/create.module';
import { CreateComponent } from './components/create/create.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, SETTINGS } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import {
  AngularFireAnalyticsModule,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import { environment } from '../environments/environment';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { SharedModule } from './components/shared/shared.module';
import { ProductViewDetailComponent } from './components/product-view-detail/product-view-detail.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HttpClientModule } from '@angular/common/http';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { PaymentFailureComponent } from './components/payment-failure/payment-failure.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ProductViewComponent,
    ProductViewDetailComponent,
    CheckoutComponent,
    PaymentSuccessComponent,
    PaymentFailureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CreateModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAnalyticsModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [
    { provide: BUCKET, useValue: 'petai-validation.appspot.com' },
    /*     {
      provide: SETTINGS,
      useValue: !environment.production
        ? {
            host: 'localhost:8080',
            ssl: false,
          }
        : undefined,
    }, */
    ScreenTrackingService,
    UserTrackingService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
