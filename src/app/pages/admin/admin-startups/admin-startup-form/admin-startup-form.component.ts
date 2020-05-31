import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import Startup from '../../../../models/startup';

import { ModalConfirmationComponent } from './../../../../utils/modal-confirmation/modal-confirmation.component';
import { StartupsService } from './../../../../api/startups/startups.service';

@Component({
  selector: 'app-admin-startup-form',
  templateUrl: './admin-startup-form.component.html',
  styleUrls: ['./admin-startup-form.component.scss'],
  providers: [NgbModal]
})
export class AdminStartupFormComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean>;
  @Input() startupData: Startup;
  @Output() edited = new EventEmitter<Startup>();
  @Output() deleted = new EventEmitter<Startup>();

  startupForm: FormGroup;

  constructor(
    private startupsService: StartupsService,
    private fb: FormBuilder,
    private modalService: NgbModal
  ) {
    this.startupForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>();

    this.setupForm(this.startupData);
  }

  save() {
    const formValue = new Startup(this.startupForm.value);

    this.startupsService.editStartup(formValue)
      .pipe(takeUntil(this.destroy$))
      .subscribe(savedStartup => {
        this.setupForm(savedStartup);
        this.edited.emit(savedStartup);
      });
  }

  remove() {
    const formValue = new Startup(this.startupForm.value);

    const modalRef = this.modalService.open(ModalConfirmationComponent);
    modalRef.componentInstance.headerTitle = 'Are you sure?';
    modalRef.componentInstance.bodyDescription = 'Deleting a startup cannot be undone!';
    modalRef.componentInstance.acceptBtn = 'Yes';
    modalRef.componentInstance.cancelBtn = 'Cancel';

    modalRef.result
      .then(accepted => {
        if (accepted) {
          this.startupsService.removeStartup(formValue)
            .pipe(takeUntil(this.destroy$))
            .subscribe(removedStartup => this.deleted.emit(removedStartup));
        }
        return;
      })
      .catch(() => { });

  }

  enableEditing() {
    this.startupForm.enable();
  }

  disableEditing() {
    this.startupForm.disable();
    this.setupForm(this.startupData);
  }

  isEnabled() {
    return this.startupForm.enabled;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  private setupForm(startup: Startup) {
    this.startupForm = startup.buildReactiveFormGroup();
    this.startupForm.disable();
  }

}
