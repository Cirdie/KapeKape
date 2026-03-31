import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './feedback.html',
  styleUrl: './feedback.css'
})
export class Feedback implements OnInit {
  showForm = false;

  feedbackList: any[] = [];

  formData = {
    name: '',
    title: '',
    rating: 5,
    message: '',
    date: ''
  };

  ngOnInit(): void {
    this.loadFeedbacks();
  }

  loadFeedbacks(): void {
    const savedFeedbacks = localStorage.getItem('feedbackList');

    if (savedFeedbacks) {
      this.feedbackList = JSON.parse(savedFeedbacks);
    } else {
      this.feedbackList = [
        {
          name: 'Ariana Cruz',
          title: 'Best coffee experience',
          rating: 5,
          message: 'The coffee was rich, smooth, and perfectly served. The place feels warm and relaxing.',
          date: 'March 28, 2026'
        },
        {
          name: 'Marco Dela Vega',
          title: 'Lovely ambiance',
          rating: 4,
          message: 'I really enjoyed the cozy interior and friendly staff. Great place for casual meetings.',
          date: 'March 25, 2026'
        },
        {
          name: 'Sofia Reyes',
          title: 'Great pastries and drinks',
          rating: 5,
          message: 'Their pastries pair so well with the coffee. Everything tasted fresh and delicious.',
          date: 'March 22, 2026'
        }
      ];

      localStorage.setItem('feedbackList', JSON.stringify(this.feedbackList));
    }
  }

  openForm(): void {
    this.showForm = true;
  }

  closeForm(): void {
    this.showForm = false;
    this.resetForm();
  }

  submitFeedback(): void {
    if (
      !this.formData.name ||
      !this.formData.title ||
      !this.formData.message ||
      !this.formData.rating
    ) {
      return;
    }

    const newFeedback = {
      name: this.formData.name,
      title: this.formData.title,
      rating: this.formData.rating,
      message: this.formData.message,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    };

    this.feedbackList.unshift(newFeedback);
    localStorage.setItem('feedbackList', JSON.stringify(this.feedbackList));

    this.closeForm();
  }

  resetForm(): void {
    this.formData = {
      name: '',
      title: '',
      rating: 5,
      message: '',
      date: ''
    };
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
