import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {AngularFireDatabase} from "@angular/fire/database";


@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['../../../assets/bootstrap/css/bootstrap.min.css']
})
export class ContactMeComponent implements OnInit {
  // The form group used for form validation

  public contactForm: FormGroup = new FormGroup({});


  constructor(private formBuilder: FormBuilder, private db: AngularFireDatabase) {
    this.contactForm = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  async submitForm() {
    const info = {
      "name": this.contactForm.get('name')?.value,
      "email": this.contactForm.get('email')?.value,
      "subject": this.contactForm.get('subject')?.value,
      "message": this.contactForm.get('message')?.value
    }
    const notification_ref = this.db.list('notifications');
    await notification_ref.push(info).then( () => {
      this.contactForm.reset();

    })
  }

}
