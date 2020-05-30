import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import Startup from '../../../models/startup';

import { StartupsService } from './../../../api/startups/startups.service';

@Component({
  selector: 'app-admin-startups',
  templateUrl: './admin-startups.component.html',
  styleUrls: ['./admin-startups.component.scss']
})
export class AdminStartupsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean>;

  startups: Startup[];

  constructor(
    private startupsService: StartupsService,
  ) {
    this.startups = [];
  }

  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>();

    this.startupsService.getStartups()
      .pipe(takeUntil(this.destroy$))
      .subscribe((startups: Startup[]) => this.startups = startups);
  }

  add() {
    const newStartup = new Startup();
  }

  onStartupEdited(editedStartup: Startup) {
    this.startups = this.startups
      .reduce(
        (acc: Startup[], val: Startup) => acc.concat(val.uid === editedStartup.uid ? editedStartup : val),
        []
      );
  }

  onStartupDeleted(deletedStartup: Startup) {
    this.startups = this.startups
      .reduce(
        (acc: Startup[], val: Startup) => val.uid === deletedStartup.uid ? acc : acc.concat(val),
        []
      );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

}
