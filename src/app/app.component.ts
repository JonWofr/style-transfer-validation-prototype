import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavigationEnd, Router } from '@angular/router';

declare const fbq: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'PetAI';

  constructor(private auth: AngularFireAuth, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        fbq('track', 'PageView');
      }
    });
    this.auth.onAuthStateChanged((user) => {
      if (!user) {
        this.auth.signInAnonymously();
      }
    });
  }
}
