// signin.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../register/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  signInForm: FormGroup;
  errorMessage?: string;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    this.errorMessage = '';
  }

  async signIn() {
    try {
      const { email, password } = this.signInForm.value;
      const isSuccess = await this.authService.signIn(email, password);

      if (isSuccess) {
        console.log('Sign-in successful');
        this.router.navigate(['/post-list']);
      } else {
        this.errorMessage = 'Invalid email or password. Please try again.';
      }
    } catch (error) {
      console.error('Error during sign in:', error);
      this.errorMessage = 'An error occurred during sign in. Please try again later.';
    }
  }
}
