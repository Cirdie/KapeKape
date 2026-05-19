import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-iced-coffee',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './iced-coffee.html',
  styleUrl: './iced-coffee.css'
})
export class IcedCoffee {
  showBackToTop: boolean = false;

  items = [
    {
          name: 'Classic Iced Americano',
          description: 'Bold espresso poured over ice with chilled water for a smooth and refreshing taste.',
          price: '₱ 130',
          image: 'https://images.ctfassets.net/v601h1fyjgba/1vlXSpBbgUo9yLzh71tnOT/a1afdbe54a383d064576b5e628035f04/Iced_Americano.jpg',
          badge: ''
        },
        {
          name: 'Vanilla Iced Latte',
          description: 'Chilled espresso with milk and a hint of vanilla sweetness.',
          price: '₱ 160',
          image: 'https://theeastcoastkitchen.com/wp-content/uploads/2025/10/Salted-honey-vanilla-latte-02-edited-scaled.jpg',
          badge: 'Popular'
        },
        {
          name: 'Caramel Iced Coffee',
          description: 'Smooth iced coffee topped with caramel drizzle for a rich, sweet finish.',
          price: '₱ 170',
          image: 'https://www.bhg.com/thmb/UcTbMWKkDYip1DojqgSbfufQRpU=/4000x0/filters:no_upscale():strip_icc()/bhg-Affogatto-Style-Caramel-Iced-Coffee-0s0juRT-4PG97XVeJSnJ9_-3004cfb890654e3e8914a44b70fb35d4.jpg',
          badge: ''
        },
        {
          name: 'Mocha Iced Latte',
          description: 'Chocolate-infused iced latte for a perfect balance of coffee and cocoa.',
          price: '₱ 175',
          image: 'https://images.ctfassets.net/v601h1fyjgba/5x572mICLA8SIK06LaRxV8/9cd38d07f301c1f62dae04246722c750/Iced_Cafe_Mocha.jpg',
          badge: 'Bestseller'
        },
        {
          name: 'Hazelnut Iced Coffee',
          description: 'Refreshing iced coffee with a nutty hazelnut flavor.',
          price: '₱ 165',
          image: 'https://pamsdailydish.com/wp-content/uploads/2024/06/ICED-HAZELNUT-STARBUCKS-PROCESS-3.jpg',
          badge: ''
        },
        {
          name: 'Cold Brew Coffee',
          description: 'Slow-steeped cold brew with a naturally smooth and low-acid taste.',
          price: '₱ 180',
          image: 'https://lifesimplified.gorenje.com/wp-content/uploads/2024/06/gorenje-blog-refreshing_cold_brew_coffee.jpg',
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
