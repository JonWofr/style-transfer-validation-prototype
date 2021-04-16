import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'create-upload-modal',
  templateUrl: './upload-modal.component.html',
  styleUrls: ['./upload-modal.component.scss'],
})
export class UploadModalComponent {
  @Output() selectFile = new EventEmitter<File>();
  @Output() closeModal = new EventEmitter<void>();

  dataProtectionChecked = true;
}
