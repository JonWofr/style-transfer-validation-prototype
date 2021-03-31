import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'create-response-modal',
  templateUrl: './response-modal.component.html',
  styleUrls: ['./response-modal.component.scss'],
})
export class ResponseModalComponent {
  @Input() hasCreatedNewDocument = false;
  @Input() submittedImagesCount = 0;
  @Input() maxSubmittedImagesCount = 3;
  @Output() closeModal = new EventEmitter<void>();
  @Output() clickSendAnotherButton = new EventEmitter<void>();
}
