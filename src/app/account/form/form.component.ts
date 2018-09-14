import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  countries = ['Italy', 'Great Britain', 'Greece', 'Spain', 'Moldova', 'Romania', 'Russia', 'Ukraine', 'USA'];
  styles = ['Modern', 'Loft', 'Vintage', 'Minimalist', 'Scandinavian'];

  accountForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.accountForm = new FormGroup({
      'inputFullname': new FormGroup({
        'inputName': new FormControl(null, Validators.required),
        'inputLastname': new FormControl(null, Validators.required),
      }),
      'inputEmail': new FormControl(null, [Validators.required, Validators.email]),
      'inputPassword': new FormControl(null, Validators.required),
      'inputAddress': new FormControl(null, Validators.required),
      'inputCity': new FormControl(null, Validators.required),
      'inputCountry': new FormControl('Moldova'),
      'inputZip': new FormControl(null),
      'stylePreference': new FormControl('Minimalist'),
      'agreeTerms': new FormControl(null, Validators.required),
    });
  }
  onCreateAcc() {
    console.log(this.accountForm);
  }

}
