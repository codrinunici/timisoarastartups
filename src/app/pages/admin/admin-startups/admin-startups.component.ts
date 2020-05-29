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

  initialStartups: Startup[];
  startups: Startup[];
  startupForms: FormGroup;

  constructor(
    private startupsService: StartupsService,
    private fb: FormBuilder
  ) {
    this.initialStartups = [];
    this.startups = [];
    this.startupForms = this.fb.group({
      startups: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>();

    this.startupsService.getStartups()
      .pipe(takeUntil(this.destroy$))
      .subscribe((startups: Startup[]) => this.initializeStartups(startups));
  }

  save(i: number) {
    console.log(this.startupFormArray.controls[i].value);
  }

  remove(i: number) {
    console.log(this.startupFormArray.controls[i].value);
  }

  enableEditing(i: number) {
    this.startupFormArray.controls[i].enable();
  }

  disableEditing(i: number) {
    this.startupFormArray.controls[i].disable();
  }

  isEnabled(i: number) {
    return this.startupFormArray.controls[i].enabled;
  }

  private get startupFormArray() {
    return this.startupForms.get('startups') as FormArray;
  }

  private initializeStartups(startups: Startup[]) {
    this.startups = [...startups];
    this.initialStartups = [...startups];
    this.startups.forEach(startup => {
      this.startupFormArray.push(startup.buildReactiveFormGroup());
    });
    this.startupFormArray.disable();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

}
