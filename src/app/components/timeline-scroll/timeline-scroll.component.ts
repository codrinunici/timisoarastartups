import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';

import {ApiService} from '../../api/api.service';

@Component({
  selector: 'app-timeline-scroll',
  templateUrl: './timeline-scroll.component.html',
  styleUrls: ['./timeline-scroll.component.scss']
})
export class TimelineScrollComponent implements OnInit, OnDestroy {

  destroy$: Subject<boolean>;
  timeline = [];

  constructor(private api: ApiService) {

  }
  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>();
    this.api.getTimeline()
      .pipe(takeUntil(this.destroy$),
        map(data => data.docs.map(timeline => timeline.data())))
      .subscribe(timelineData => this.timeline = timelineData);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

}
