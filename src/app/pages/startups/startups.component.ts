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

import { StartupsService } from './../../api/startups/startups.service';


@Component({
  selector: 'app-startups',
  templateUrl: './startups.component.html',
  styleUrls: ['./startups.component.scss'],
})
export class StartupsComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean>;
  startups = [];
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
  constructor(private startupsService: StartupsService) { }

  ngOnInit(): void {
    this.destroy$ = new Subject();
    this.startupsService
      .getStartups()
      .pipe(
        takeUntil(this.destroy$),
        map((docs) =>
          docs.sort((a, b) =>
            a.name.toLocaleLowerCase().localeCompare(b.name.toLocaleLowerCase())
          )
        )
      )
      .subscribe((data) => (this.startups = data));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
