import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ModalConfirmationComponent } from './modal-confirmation/modal-confirmation.component';



@NgModule({
  declarations: [ModalConfirmationComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [ModalConfirmationComponent]
})
export class UtilsModule { }
