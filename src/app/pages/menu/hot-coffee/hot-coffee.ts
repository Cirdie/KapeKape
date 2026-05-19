import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hot-coffee',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hot-coffee.html',
  styleUrl: './hot-coffee.css'
})
export class HotCoffee {
  showBackToTop: boolean = false;

  items = [
  {
          name: 'Kapeng Barako',
          description: 'A strong and aromatic Filipino coffee made from locally loved beans, perfect for a bold start to your day.',
          price: '₱ 95',
          image: 'https://static.wixstatic.com/media/9d1501_b45b1a7ada394578ae414f37d549f4c1~mv2.jpg/v1/fill/w_520,h_272,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9d1501_b45b1a7ada394578ae414f37d549f4c1~mv2.jpg',
          badge: 'Bestseller'
        },
        {
          name: 'Cloud Foam Cappuccino',
          description: 'Espresso topped with silky steamed milk and thick foam.',
          price: '₱ 145',
          image: 'https://www.cuisinart.ca/dw/image/v2/ABAF_PRD/on/demandware.static/-/Sites-ca-cuisinart-sfra-Library/default/dwc7862ee0/images/recipe-Images/cappuccino1-recipe.jpg?sw=1200&sh=630%3D',
          badge: ''
        },
        {
          name: 'Heritage Filter Brew',
          description: 'Slow-brewed coffee with a strong aroma and comforting taste.',
          price: '₱ 85',
          image: 'https://images.indianexpress.com/2024/03/indian-filter-coffee.jpg?w=1200',
          badge: 'Must Try'
        },
        {
          name: 'Silky Flat White',
          description: 'Velvety microfoam over a smooth double espresso shot.',
          price: '₱ 155',
          image: 'https://cdn.coffeecircle.com/a6f05fef-d395-4671-b692-1f1b21358213/-/resize/1200x/-/quality/lighter/-/progressive/yes/-/format/auto/coffeecircleespressomaschinezubehoermuehle59.jpg',
          badge: ''
        },
        {
          name: 'Creamy Café Latte',
          description: 'Smooth espresso blended with generous steamed milk.',
          price: '₱ 150',
          image: 'https://www.allrecipes.com/thmb/SUs7po94w7k2OwqYDjC3H_ZW3JQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/96629-cafe-latte-ddmfs-hero-4x3-0288359d9c37485fa69afe5369dbcf2e.jpg',
          badge: ''
        },
        {
          name: 'Golden Caramel Mocha',
          description: 'Chocolate espresso topped with caramel drizzle and milk.',
          price: '₱ 175',
          image: 'https://www.zulaykitchen.com/cdn/shop/articles/How_to_Make_Caramel_Mocha_Latte_3c3b55bc-adac-425b-bc80-2acaecd2bd4d.jpg?v=1748036682&width=2048',
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
