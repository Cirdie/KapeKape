import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email = '';
  password = '';
  rememberMe = false;
  showPassword = false;

  errorMessage = '';
  successMessage = '';

  constructor(private router: Router) {}

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onLogin(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter your email and password.';
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const matchedUser = users.find(
      (user: any) => user.email === this.email && user.password === this.password
    );

    if (!matchedUser) {
      this.errorMessage = 'Invalid email or password.';
      return;
    }

    localStorage.setItem('currentUser', JSON.stringify(matchedUser));

    if (this.rememberMe) {
      localStorage.setItem('rememberedEmail', this.email);
    } else {
      localStorage.removeItem('rememberedEmail');
    }

    this.successMessage = 'Login successful! Redirecting...';

    setTimeout(() => {
      this.router.navigate(['/feedback']);
    }, 1000);
  }

  ngOnInit(): void {
    const rememberedEmail = localStorage.getItem('rememberedEmail');

    if (rememberedEmail) {
      this.email = rememberedEmail;
      this.rememberMe = true;
    }
  }
}
