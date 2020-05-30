import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ApiService } from './../../../api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ApiService]
})
export class LoginComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean>;
  loginForm: FormGroup;
  loginError: string;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>();

    this.api.adminCheckAuthState()
      .pipe(
        takeUntil(this.destroy$)
      ).subscribe(user => user ? this.router.navigate(['./admin', 'panel']) : undefined);

    this.loginForm.valueChanges
      .pipe(
        takeUntil(this.destroy$)
      ).subscribe(() => {
        this.loginError = '';
      })
  }

  login() {
    if (!this.loginForm.valid) {
      return;
    }
    this.api.adminLogin(
      this.loginForm.get('email').value,
      this.loginForm.get('password').value
    ).pipe(
      takeUntil(this.destroy$)
    ).subscribe(
      () => this.router.navigate(['./admin', 'panel']),
      (err) => {
        console.log(err.message);
        this.loginError = err.message;
      }
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

}
