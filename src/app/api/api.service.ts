import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {from} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private afs: AngularFirestore, private auth: AngularFireAuth) {
  }


  newsletterSignup(data: any) {
    return from(this.afs.collection('newsletter').add(data));
  }

  getPeople() {
    return from(this.afs.collection('people').get());
  }

  getTeam() {
    return from(this.afs.collection('team').get());
  }
  getTimeline(){
    return from(this.afs.collection('timeline').get());
  }

  getArticles() {
    return from(this.afs.collection('articles').get());
  }

  getArticle(uid: string) {
    return from(this.afs.doc(`articles/${uid}`).get());
  }

  adminLogin(email: string, password: string) {
    return from(this.auth.signInWithEmailAndPassword(email, password));
  }

  adminCheckAuthState() {
    return this.auth.authState;
  }
}
