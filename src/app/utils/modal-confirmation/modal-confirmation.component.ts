import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-confirmation',
  templateUrl: './modal-confirmation.component.html',
  styleUrls: ['./modal-confirmation.component.scss']
})
export class ModalConfirmationComponent implements OnInit {
  @Input() headerTitle = '';
  @Input() bodyDescription = '';
  @Input() acceptBtn = '';
  @Input() cancelBtn = '';

  constructor(
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  acceptClicked() {
    this.activeModal.close(true);
  }

  closeClicked() {
    this.activeModal.close(false);
  }

}
