import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  faFacebookSquare,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import {faEnvelopeSquare, faLink} from '@fortawesome/free-solid-svg-icons';
import {Subject} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';
import {ApiService} from '../../api/api.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean>;
  team = [];
  icon = {
    crunchbase: 'cb',
    facebook: faFacebookSquare,
    linkedin: faLinkedin,
    website: faLink,
    email: faEnvelopeSquare,
  };

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.destroy$ = new Subject();
    this.api.getTeam()
      .pipe(takeUntil(this.destroy$),
        map(data => data.docs
          .map(team => team.data())))
      .subscribe(teamInfo => this.team = teamInfo);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
