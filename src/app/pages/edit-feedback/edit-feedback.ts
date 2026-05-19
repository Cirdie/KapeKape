import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-feedback',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './edit-feedback.html',
  styleUrl: './edit-feedback.css'
})
export class EditFeedback implements OnInit {
  feedbackId: number = 0;

  formData = {
    id: 0,
    title: '',
    rating: 5,
    message: '',
    date: '',
    status: 'Published'
  };

  stars = [1, 2, 3, 4, 5];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.feedbackId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadFeedback();
  }

  loadFeedback(): void {
    const saved = localStorage.getItem('myFeedbackList');
    const list = saved ? JSON.parse(saved) : [];

    const selectedFeedback = list.find((item: any) => item.id === this.feedbackId);

    if (selectedFeedback) {
      this.formData = { ...selectedFeedback };
    }
  }

  setRating(rating: number): void {
    this.formData.rating = rating;
  }

  updateFeedback(): void {
    const saved = localStorage.getItem('myFeedbackList');
    const list = saved ? JSON.parse(saved) : [];

    const updatedList = list.map((item: any) => {
      if (item.id === this.feedbackId) {
        return {
          ...item,
          title: this.formData.title,
          rating: this.formData.rating,
          message: this.formData.message
        };
      }
      return item;
    });

    localStorage.setItem('myFeedbackList', JSON.stringify(updatedList));
    this.router.navigate(['/my-feedback']);
  }
}
