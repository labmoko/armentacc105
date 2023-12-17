
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../validators';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({});
  errorMessage?: string;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, passwordValidator()]],
      agreeTerms: [false, [Validators.requiredTrue]],
      // Add other form controls as needed
    });

     // Subscribe to changes in the firstname control to apply auto-capitalization
  this.setupAutoCapitalization('firstname');
  this.setupAutoCapitalization('lastname');

  // Add a custom validator to the password control
  const passwordControl = this.formGroup.get('password');
  if (passwordControl) {
    passwordControl.setValidators([Validators.required, passwordValidator(), this.passwordCriteriaValidator()]);
  }
}

private setupAutoCapitalization(controlName: string): void {
  const control = this.formGroup.get(controlName);
  if (control) {
    control.valueChanges.subscribe((value: string) => {
      control.setValue(this.capitalizeFirstLetter(value), { emitEvent: false });
    });
  }
}

private passwordCriteriaValidator() {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const password = control.value;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

    if (!passwordPattern.test(password)) {
      return { 'passwordCriteria': true };
    }

    return null;
  };
}


  register() {
    if (this.formGroup.valid) {
      const { firstname, lastname, email, password, agreeTerms } = this.formGroup.value;

      // Perform your signup logic here

      // Clear the form after successful signup
      this.formGroup.reset();
      this.errorMessage = 'Registration successful. You can now sign in.';
    } else {
      this.errorMessage = 'Please fill in all required fields and agree to the terms.';
    }
  }

  capitalizeFirstLetter(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
