import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'style-transfer-validation-prototype';

  constructor(private auth: AngularFireAuth) {
    console.log('running constructor');
    this.auth.onAuthStateChanged((user) => {
      if (!user) {
        console.log('Signing in user');
        this.auth.signInAnonymously();
        console.log('User signed in');
      } else {
        console.log('User already signed in');
      }
    });
  }

  ngOnInit(): void {
    console.log('view build');
  }
}
