import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'create-upload-modal',
  templateUrl: './upload-modal.component.html',
  styleUrls: ['./upload-modal.component.scss'],
})
export class UploadModalComponent implements OnInit {
  @Output() uploadedImage = new EventEmitter<File | string | null>();

  constructor() {}

  ngOnInit(): void {}

  dataProtectionChecked = false;

  onChange(event: any) {
    let imageFile = event.target.files[0];
    this.previewFile(imageFile);
  }

  onClose() {
    this.uploadedImage.emit(null);
  }

  previewFile(file: File) {
    const reader = new FileReader();

    reader.addEventListener(
      'load',
      () => {
        // convert image file to base64 string
        let img64 = reader.result as string;
        this.uploadedImage.emit(img64);
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  }
}
