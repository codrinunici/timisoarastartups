import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

import Startup from '../../models/startup';

@Injectable({
  providedIn: 'root'
})
export class StartupsService {

  constructor(
    private afs: AngularFirestore
  ) { }

  getStartups(): Observable<Startup[]> {
    return this.afs.collection('startups')
      .get()
      .pipe(
        map(data => data.docs
          .map(doc => new Startup({ uid: doc.id, ...doc.data() }))
          .sort((a, b) =>
            a.name.toLocaleLowerCase().localeCompare(b.name.toLocaleLowerCase())
          )
        )
      );
  }

  addStartup(startup: Startup): Observable<Startup> {
    return from(
      this.afs.collection('startups')
        .add(startup.getStripped())
        .then(newStartup => new Startup({ ...startup, uid: newStartup.id }))
    );
  }

  editStartup(startup: Startup): Observable<Startup> {
    return from(
      this.afs.doc(`startups/${startup.uid}`)
        .update(startup.getStripped())
        .then(() => startup)
    );
  }

  removeStartup(startup: Startup): Observable<Startup> {
    return from(
      this.afs.doc(`startups/${startup.uid}`)
        .delete()
        .then(() => startup)
    );
  }
}
