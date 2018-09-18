import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      'inputEmail': new FormControl(null, [Validators.required, Validators.email]),
      'inputPassword': new FormControl(null, Validators.required),
    });
  }
  onSignIn() {
    console.log(this.signInForm);
  }
}
