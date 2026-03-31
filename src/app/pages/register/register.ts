import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  acceptTerms = false;

  showPassword = false;
  showConfirmPassword = false;

  errorMessage = '';
  successMessage = '';

  constructor(private router: Router) {}

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onRegister(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.name || !this.email || !this.password || !this.confirmPassword) {
      this.errorMessage = 'All fields are required.';
      return;
    }

    if (!this.acceptTerms) {
      this.errorMessage = 'You must accept the Terms & Conditions.';
      return;
    }

    if (this.password.length < 6) {
      this.errorMessage = 'Password must be at least 6 characters.';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const existingUser = users.find((user: any) => user.email === this.email);

    if (existingUser) {
      this.errorMessage = 'Email is already registered.';
      return;
    }

    const newUser = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    this.successMessage = 'Registration successful! Redirecting to login...';

    this.name = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.acceptTerms = false;

    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1500);
  }
}
