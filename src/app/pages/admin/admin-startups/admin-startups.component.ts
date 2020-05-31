import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import Startup from '../../../models/startup';

import { AdminAddStartupComponent } from './admin-add-startup/admin-add-startup.component';
import { StartupsService } from './../../../api/startups/startups.service';

@Component({
  selector: 'app-admin-startups',
  templateUrl: './admin-startups.component.html',
  styleUrls: ['./admin-startups.component.scss'],
  providers: [NgbModal]
})
export class AdminStartupsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean>;

  startups: Startup[];

  constructor(
    private startupsService: StartupsService,
    private modalService: NgbModal
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
    const modalRef = this.modalService.open(AdminAddStartupComponent, { size: 'lg' });

    modalRef.result
      .then(newStartup => {
        if (newStartup) {
          this.onStartupAdded(newStartup);
        }
        return;
      })
      .catch(() => { });
  }

  onStartupAdded(newStartup: Startup) {
    this.startups = this.startups
      .concat(newStartup)
      .sort((a, b) =>
        a.name.toLocaleLowerCase().localeCompare(b.name.toLocaleLowerCase())
      );
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
