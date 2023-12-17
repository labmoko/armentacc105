// auth.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedFlag = false;

  async signIn(email: string, password: string): Promise<boolean> {
    // Implement sign-in logic
    // Simulate an asynchronous operation (replace with actual implementation)
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Set isAuthenticatedFlag to true upon successful authentication
    this.isAuthenticatedFlag = true;
    return this.isAuthenticatedFlag;
  }

  async register(email: string, password: string): Promise<boolean> {
    // Implement sign-up logic
    // Simulate an asynchronous operation (replace with actual implementation)
    try {
      // Simulate an asynchronous operation (replace with actual implementation)
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Set isAuthenticatedFlag to true upon successful registration
      this.isAuthenticatedFlag = true;
      return this.isAuthenticatedFlag;
    } catch (error) {
      console.error('Error during sign up:', error);
      return false;
    }
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedFlag;
  }
}
  