import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(): void {
    var config = {
      apiKey: "AIzaSyBRU0DX8b0pgyBaJR73zuiU_g1nPcKKvqs",
      authDomain: "jta-instagram-clone-de6f8.firebaseapp.com",
      databaseURL: "https://jta-instagram-clone-de6f8.firebaseio.com",
      projectId: "jta-instagram-clone-de6f8",
      storageBucket: "jta-instagram-clone-de6f8.appspot.com",
      messagingSenderId: "108214528294"
    };
    firebase.initializeApp(config);
  }

}
