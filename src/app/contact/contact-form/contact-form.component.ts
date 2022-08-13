import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  public contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.contactForm = this.fb.group({
      name: [null, Validators.required],
      emailAddress: [null, [Validators.required, Validators.email]],
      message: [null, Validators.required],
    });
  }

  public sendContact(): void {
    // TODO here is form value
    // console.log(this.contactForm.value);
  }
}
