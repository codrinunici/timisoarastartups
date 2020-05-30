import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import Startup from '../../../../models/startup';

import { StartupsService } from './../../../../api/startups/startups.service';

@Component({
  selector: 'app-admin-startup-form',
  templateUrl: './admin-startup-form.component.html',
  styleUrls: ['./admin-startup-form.component.scss']
})
export class AdminStartupFormComponent implements OnInit {
  @Input() startupData: Startup;
  @Output() edited = new EventEmitter<Startup>();
  @Output() deleted = new EventEmitter<Startup>();

  startupForm: FormGroup;

  constructor(
    private startupsService: StartupsService,
    private fb: FormBuilder
  ) {
    this.startupForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.setupForm(this.startupData);
  }

  save() {
    const formValue = new Startup(this.startupForm.value);

    this.startupsService.editStartup(formValue)
      .subscribe(savedStartup => {
        this.setupForm(savedStartup);
        this.edited.emit(savedStartup);
      });
  }

  remove() {
    const formValue = new Startup(this.startupForm.value);

    this.deleted.emit(formValue);
  }

  enableEditing() {
    this.startupForm.enable();
  }

  disableEditing() {
    this.startupForm.disable();
  }

  isEnabled() {
    return this.startupForm.enabled;
  }

  private setupForm(startup: Startup) {
    this.startupForm = startup.buildReactiveFormGroup();
    this.startupForm.disable();
  }

}
