import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pastries-baked-goods',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pastries-baked-goods.html',
  styleUrl: './pastries-baked-goods.css'
})
export class PastriesBakedGoods {
  showBackToTop: boolean = false;

  items = [
    {
          name: 'Butter Croissant',
          description: 'Flaky, buttery croissant baked fresh daily with golden layers.',
          price: '₱ 120',
          image: 'https://butterboyph.com/cdn/shop/files/classic.jpg?v=1714490336',
          badge: 'Bestseller'
        },
        {
          name: 'Chocolate Croissant',
          description: 'Classic croissant filled with rich melted chocolate.',
          price: '₱ 135',
          image: 'https://www.homemadeinterest.com/wp-content/uploads/2021/10/Easy-Chocolate-Croissant_IG-3.jpg',
          badge: ''
        },
        {
          name: 'Blueberry Muffin',
          description: 'Soft and moist muffin packed with juicy blueberries.',
          price: '₱ 110',
          image: 'https://sallysbakingaddiction.com/wp-content/uploads/2019/05/blueberry-muffin.jpg',
          badge: 'Popular'
        },
        {
          name: 'Cinnamon Roll',
          description: 'Sweet rolled pastry with cinnamon filling and creamy glaze.',
          price: '₱ 145',
          image: 'https://handletheheat.com/wp-content/uploads/2023/12/gooey-cinnamon-rolls-SQUARE-2.jpg',
          badge: ''
        },
        {
          name: 'Banana Bread Slice',
          description: 'Moist banana bread with a rich, homemade flavor.',
          price: '₱ 95',
          image: 'https://tastesbetterfromscratch.com/wp-content/uploads/2023/03/Banana-Bread25-1.jpg',
          badge: 'Must Try'
        },
        {
          name: 'Cheese Danish',
          description: 'Light pastry filled with creamy cheese and a hint of sweetness.',
          price: '₱ 140',
          image: 'https://therecipecritic.com/wp-content/uploads/2024/12/cheese-danish-1.jpg',
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
