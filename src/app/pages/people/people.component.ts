import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  faAngellist,
  faAppStoreIos,
  faFacebookSquare,
  faGooglePlay,
  faLinkedin,
  faTwitterSquare
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faLink } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { ApiService } from './../../api/api.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
  providers: [ApiService]
})
export class PeopleComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean>;

  people = [];
  icon = {
    angellist: faAngellist,
    crunchbase: 'cb',
    facebook: faFacebookSquare,
    twitter: faTwitterSquare,
    linkedin: faLinkedin,
    website: faLink,
    email: faEnvelopeSquare,
    gplay: faGooglePlay,
    appstore: faAppStoreIos,
  };

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.destroy$ = new Subject();
    this.api
      .getPeople()
      .pipe(
        takeUntil(this.destroy$),
        map(data => data.docs.map(doc => doc.data())),
        map(docs =>
          docs.sort((a, b) =>
            a.name.toLocaleLowerCase().localeCompare(b.name.toLocaleLowerCase())
          )
        )
      )
      .subscribe(data => this.people = data)
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

}
