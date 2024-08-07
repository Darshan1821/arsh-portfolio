import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  firebaseConfig = {
    apiKey: "AIzaSyCPS52LmEenI2MqWl8x7tRqrdsQVVDpptM",
    authDomain: "arsh-portfolio-82903.firebaseapp.com",
    projectId: "arsh-portfolio-82903",
    storageBucket: "arsh-portfolio-82903.appspot.com",
    messagingSenderId: "162741011518",
    appId: "1:162741011518:web:b41877ee05a948402e7d6f",
    measurementId: "G-7W7RT6E6CN"
  };

  app: any;

  constructor() {
    this.app = initializeApp(this.firebaseConfig);
  }
}
