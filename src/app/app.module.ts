import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateModule } from './components/create/create.module';
import { CreateComponent } from './components/create/create.component';

@NgModule({
  declarations: [AppComponent, CreateComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CreateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
