import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './feedback.html',
  styleUrl: './feedback.css'
})
export class Feedback implements OnInit {
  feedbackList: any[] = [];
  isLoggedIn = false;

  constructor(private router: Router) {}

  staticFeedback = [
    {
      name: 'Ariana Cruz',
      title: 'Best coffee',
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
    },
    {
      name: 'Juan Dela Cruz',
      title: 'Masarap at sulit',
      rating: 5,
      message: 'Grabe ang sarap ng kape nila! Worth it ang presyo at babalik ako ulit.',
      date: 'April 1, 2026'
    },
    {
      name: 'Maria Santos',
      title: 'Magandang tambayan',
      rating: 4,
      message: 'Ang ganda ng place, tahimik at relaxing. Perfect para sa study or work.',
      date: 'April 2, 2026'
    },
    {
      name: 'Paolo Garcia',
      title: 'Okay naman',
      rating: 3,
      message: 'Okay ang service pero medyo matagal lang ang waiting time.',
      date: 'April 3, 2026'
    },
    {
      name: 'Junrey Balaba',
      title: 'Lami kaayo!',
      rating: 5,
      message: 'Lami kaayo ilang kape ug desserts. Nindot sad ang lugar, chill kaayo.',
      date: 'April 4, 2026'
    },
    {
      name: 'Christine Dela Peña',
      title: 'Nice place to relax',
      rating: 4,
      message: 'Ganahan ko sa vibes diri, very peaceful ug limpyo ang cafe.',
      date: 'April 5, 2026'
    },
    {
      name: 'Rodel Cabahug',
      title: 'Medyo mahal',
      rating: 3,
      message: 'Okay ang taste pero medyo mahal lang para sa akoa.',
      date: 'April 6, 2026'
    },
    {
      name: 'Liam Carter',
      title: 'Perfect chill spot',
      rating: 5,
      message: 'Absolutely loved the atmosphere. Great coffee and friendly staff.',
      date: 'April 7, 2026'
    },
    {
      name: 'Emma Watson',
      title: 'Aesthetic and cozy',
      rating: 5,
      message: 'The interior design is beautiful. Perfect for photos and relaxing.',
      date: 'April 8, 2026'
    },
    {
      name: 'Noah Smith',
      title: 'Good but slow service',
      rating: 3,
      message: 'Coffee is great but service can be improved during peak hours.',
      date: 'April 9, 2026'
    },
    {
      name: 'Kevin Lopez',
      title: 'Solid experience',
      rating: 4,
      message: 'Masarap yung drinks nila and mabilis ang service. Will come back!',
      date: 'April 10, 2026'
    },
    {
      name: 'Angela Bautista',
      title: 'Instagrammable place',
      rating: 5,
      message: 'Super ganda ng cafe! Ang sarap pa ng drinks. Highly recommended.',
      date: 'April 11, 2026'
    },
    {
      name: 'Mark Tan',
      title: 'Not bad',
      rating: 3,
      message: 'Okay lang overall. Nothing too special but still enjoyable.',
      date: 'April 12, 2026'
    }
  ];

  ngOnInit(): void {
    this.checkLoginStatus();
    this.loadAllFeedback();
  }

  checkLoginStatus(): void {
    this.isLoggedIn = !!localStorage.getItem('currentUser');
  }

  loadAllFeedback(): void {
    const saved = localStorage.getItem('myFeedbackList');
    const userFeedback = saved ? JSON.parse(saved) : [];

    const formattedUserFeedback = userFeedback.map((f: any) => ({
      name: 'You',
      title: f.title,
      rating: f.rating,
      message: f.message,
      date: f.date
    }));

    this.feedbackList = [
      ...formattedUserFeedback,
      ...this.staticFeedback
    ];
  }

  goToMyFeedback(): void {
    const isLoggedIn = !!localStorage.getItem('currentUser');

    if (isLoggedIn) {
      this.router.navigate(['/my-feedback']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
