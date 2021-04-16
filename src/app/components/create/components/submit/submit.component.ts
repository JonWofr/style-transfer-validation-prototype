import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'create-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss'],
})
export class SubmitComponent implements OnInit {
  @Input() styleImageName: string;
  @Input() styleImageUrl: string;
  @Output() submitForm = new EventEmitter<string>();
  @Input() email = '';

  constructor() {}

  ngOnInit(): void {}

  onChangeEmail(email: string) {
    this.email = email;
  }

  onSubmitForm(submitEvent: Event) {
    submitEvent.preventDefault();

    this.submitForm.emit(this.email);
  }
}
