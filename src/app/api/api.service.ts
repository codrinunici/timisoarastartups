import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private afs: AngularFirestore, private auth: AngularFireAuth) {}

  newsletterSignup(data: any) {
    return from(this.afs.collection('newsletter').add(data));
  }
}
