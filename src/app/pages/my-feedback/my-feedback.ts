import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-feedback',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './my-feedback.html',
  styleUrl: './my-feedback.css'
})
export class MyFeedback implements OnInit {
  
  myFeedbackList: any[] = [];

  ngOnInit(): void {
    this.loadMyFeedback();
  }

  loadMyFeedback(): void {
    const saved = localStorage.getItem('myFeedbackList');

    if (saved) {
      this.myFeedbackList = JSON.parse(saved);
    } else {
      this.myFeedbackList = [
        {
          id: 1,
          title: 'Amazing cappuccino',
          rating: 5,
          message: 'Loved the taste and the presentation. I would definitely order again.',
          date: 'April 02, 2026',
          status: 'Published'
        },
        {
          id: 2,
          title: 'Nice and peaceful place',
          rating: 4,
          message: 'The cafe atmosphere is relaxing and perfect for studying.',
          date: 'April 05, 2026',
          status: 'Published'
        },
        {
          id: 3,
          title: 'Good but can improve',
          rating: 3,
          message: 'The drinks were good, but I hope the service becomes faster next time.',
          date: 'April 08, 2026',
          status: 'Published'
        }
      ];

      localStorage.setItem('myFeedbackList', JSON.stringify(this.myFeedbackList));
    }
  }

  deleteFeedback(id: number): void {
    this.myFeedbackList = this.myFeedbackList.filter(feedback => feedback.id !== id);
    localStorage.setItem('myFeedbackList', JSON.stringify(this.myFeedbackList));
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
