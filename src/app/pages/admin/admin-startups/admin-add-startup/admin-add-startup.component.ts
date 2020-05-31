import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import Startup from '../../../../models/startup';

@Component({
  selector: 'app-admin-add-startup',
  templateUrl: './admin-add-startup.component.html',
  styleUrls: ['./admin-add-startup.component.scss']
})
export class AdminAddStartupComponent implements OnInit {
  startup: Startup;

  constructor(
    private activeModal: NgbActiveModal
  ) {
    this.startup = new Startup();

  }

  ngOnInit(): void {
  }

  onStartupAdded(newStartup: Startup) {
    this.activeModal.close(newStartup);
  }

  closeClicked() {
    this.activeModal.close(false);
  }

}
