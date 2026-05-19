import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-breakfast-items',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './breakfast-items.html',
  styleUrl: './breakfast-items.css'
})
export class BreakfastItems {
  showBackToTop: boolean = false;

  items = [
    {
          name: 'Classic Filipino Breakfast',
          description: 'A hearty breakfast plate with garlic rice, egg, and your choice of savory morning favorite.',
          price: '₱ 189',
          image: 'https://www.hospitalitymagazine.com.au/wp-content/uploads/2024/05/Tapsilog.jpg?w=887',
          badge: 'Bestseller'
        },
        {
          name: 'Ham & Egg Croissant',
          description: 'A buttery croissant filled with ham, fluffy egg, and melted cheese for a satisfying bite.',
          price: '₱ 165',
          image: 'https://djalalicooks.com/wp-content/uploads/2021/10/IMG_9498.jpg',
          badge: ''
        },
        {
          name: 'Pancake Stack',
          description: 'Soft and fluffy pancakes served with syrup and butter for a sweet breakfast start.',
          price: '₱ 175',
          image: 'https://recipesblob.blob.core.windows.net/assets/4acbec1ea07846acb27a8abc3c4d0738/750x910/american-pancakes-v1.webp',
          badge: 'Popular'
        },
        {
          name: 'Breakfast Sandwich',
          description: 'Toasted bread layered with egg, cheese, and fresh fillings for an easy morning meal.',
          price: '₱ 155',
          image: 'https://www.twopeasandtheirpod.com/wp-content/uploads/2023/06/Breakfast-Sandwich-0015.jpg',
          badge: ''
        },
        {
          name: 'French Toast Delight',
          description: 'Golden French toast dusted lightly and served with syrup for a warm, comforting breakfast.',
          price: '₱ 170',
          image: 'https://earlybrawd.com/wp-content/uploads/2023/06/French-toast-Apricot-Rosemary-10-2.jpg',
          badge: 'Must Try'
        },
        {
          name: 'Breakfast Burrito',
          description: 'A filling wrap with eggs, cheese, and flavorful breakfast ingredients, perfect on the go.',
          price: '₱ 185',
          image: 'https://www.espressomykitchen.com/wp-content/uploads/2024/04/EMK-california-breakfast-burrito-hero-02.jpg',
          badge: 'New'
        }
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.showBackToTop = window.scrollY > 400;
  }

  scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
