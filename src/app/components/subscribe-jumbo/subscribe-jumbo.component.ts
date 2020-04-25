import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../api/api.service';

@Component({
  selector: 'app-subscribe-jumbo',
  templateUrl: './subscribe-jumbo.component.html',
  styleUrls: ['./subscribe-jumbo.component.scss'],
})
export class SubscribeJumboComponent {
  newsletterForm: FormGroup;

  constructor(private api: ApiService, private fb: FormBuilder) {
    this.newsletterForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  submitForm() {
    this.api.newsletterSignup(this.newsletterForm.value).subscribe();
  }
}
