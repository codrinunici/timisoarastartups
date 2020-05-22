import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { from } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private afs: AngularFirestore, private auth: AngularFireAuth) { }

  newsletterSignup(data: any) {
    return from(this.afs.collection('newsletter').add(data));
  }

  getStartups() {
    return from(this.afs.collection('startups').get());
  }

  getPeople() {
    return from(this.afs.collection('people').get());
  }

  getArticles() {
    return from(this.afs.collection('articles').get());
  }
}
