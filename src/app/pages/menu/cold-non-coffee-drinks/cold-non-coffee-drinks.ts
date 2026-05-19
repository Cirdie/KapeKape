import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cold-non-coffee-drinks',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cold-non-coffee-drinks.html',
  styleUrl: './cold-non-coffee-drinks.css'
})
export class ColdNonCoffeeDrinks {
  showBackToTop: boolean = false;

  items = [
    {
          name: 'Iced Chocolate Bliss',
          description: 'Rich chocolate blended with ice and milk for a smooth, refreshing treat.',
          price: '₱ 165',
          image: 'https://png.pngtree.com/thumb_back/fh260/background/20240328/pngtree-iced-chocolate-milkshake-frappe-or-blend-image_15645289.jpg',
          badge: 'Popular'
        },
        {
          name: 'Strawberry Milkshake',
          description: 'Creamy milkshake with fresh strawberry flavor, sweet and refreshing.',
          price: '₱ 175',
          image: 'https://www.southernliving.com/thmb/gee_M98UezeOVrpk622i-zYkCKY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/strawberry-milkshake-3-df5b8b02a0844dfdb47c860476e1b974.jpg',
          badge: ''
        },
        {
          name: 'Mango Smoothie',
          description: 'Tropical mango blended into a chilled, fruity smoothie perfect for hot days.',
          price: '₱ 160',
          image: 'https://getinspiredeveryday.com/wp-content/uploads/2023/03/Mango-Smoothie-Get-Inspired-Everyday-8.jpg',
          badge: 'Bestseller'
        },
        {
          name: 'Iced Matcha Latte',
          description: 'Premium matcha served cold with creamy milk for a smooth and earthy drink.',
          price: '₱ 170',
          image: 'https://www.foodandwine.com/thmb/2tI8aL1Z8hKhfV48_c8b6uWG-TQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Iced-Matcha-Latte-FT-RECIPE0622-2000-9c2e116d3bc54bdaacda10e62e8e0205.jpg',
          badge: ''
        },
        {
          name: 'Lemon Iced Tea',
          description: 'Classic iced tea with a refreshing citrus twist, light and cooling.',
          price: '₱ 120',
          image: 'https://realfood.tesco.com/media/images/RFO-1400x919-IcedTea-8e156836-69f4-4433-8bae-c42e174212c1-0-1400x919.jpg',
          badge: ''
        },
        {
          name: 'Blueberry Yogurt Smoothie',
          description: 'Creamy yogurt blended with blueberries for a refreshing and tangy drink.',
          price: '₱ 180',
          image: 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/03/Blueberry-Smoothie-main.jpg',
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
