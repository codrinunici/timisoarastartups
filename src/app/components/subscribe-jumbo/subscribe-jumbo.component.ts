import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApiService } from '../../api/api.service';

@Component({
  selector: 'app-subscribe-jumbo',
  templateUrl: './subscribe-jumbo.component.html',
  styleUrls: ['./subscribe-jumbo.component.scss'],
})
export class SubscribeJumboComponent implements OnInit, OnDestroy {
  newsletterForm: FormGroup;
  destroy$: Subject<boolean>;

  constructor(private api: ApiService, private fb: FormBuilder) {
    this.newsletterForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.destroy$ = new Subject<boolean>();
  }

  submitForm() {
    this.api
      .newsletterSignup(this.newsletterForm.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
