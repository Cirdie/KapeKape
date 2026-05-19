import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-feedback',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './add-feedback.html',
  styleUrl: './add-feedback.css',
})
export class AddFeedback {
  constructor(private router: Router) {}

  formData = {
    title: '',
    rating: 5,
    message: ''
  };

  stars = [1, 2, 3, 4, 5];

  setRating(rating: number): void {
    this.formData.rating = rating;
  }

  submitFeedback(): void {
    const saved = localStorage.getItem('myFeedbackList');
    const feedbackList = saved ? JSON.parse(saved) : [];

    const newFeedback = {
      id: Date.now(),
      title: this.formData.title,
      rating: this.formData.rating,
      message: this.formData.message,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
      }),
      status: 'Published'
    };

    feedbackList.unshift(newFeedback);
    localStorage.setItem('myFeedbackList', JSON.stringify(feedbackList));

    this.resetForm();
    this.router.navigate(['/my-feedback']);
  }

  resetForm(): void {
    this.formData = {
      title: '',
      rating: 5,
      message: ''
    };
  }
}
