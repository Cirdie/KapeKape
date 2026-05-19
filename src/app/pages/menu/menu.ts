import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  showBackToTop: boolean = false;

  categories = [
    {
      title: 'All',
      description: 'See all café menu items in one place.',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&q=80',
      route: '/menu/all'
    },
    {
      title: 'Hot Coffee',
      description: 'Freshly brewed hot coffee favorites.',
      image: 'https://static.wixstatic.com/media/9d1501_b45b1a7ada394578ae414f37d549f4c1~mv2.jpg/v1/fill/w_520,h_272,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9d1501_b45b1a7ada394578ae414f37d549f4c1~mv2.jpg',
      route: '/menu/hot-coffee'
    },
    {
      title: 'Iced Coffee',
      description: 'Cold and refreshing coffee drinks.',
      image: 'https://images.ctfassets.net/v601h1fyjgba/1vlXSpBbgUo9yLzh71tnOT/a1afdbe54a383d064576b5e628035f04/Iced_Americano.jpg',
      route: '/menu/iced-coffee'
    },
    {
      title: 'Non-Coffee Hot Drinks',
      description: 'Warm chocolate, matcha, and tea-based drinks.',
      image: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https%3A%2F%2Farc-anglerfish-washpost-prod-washpost.s3.amazonaws.com%2Fpublic%2FXO2CESCABTVSBKS6IE7DH5IGTU.jpg?h=982&w=1200',
      route: '/menu/non-coffee-hot-drinks'
    },
    {
      title: 'Cold Non-Coffee Drinks',
      description: 'Chilled non-coffee refreshers for any mood.',
      image: 'https://png.pngtree.com/thumb_back/fh260/background/20240328/pngtree-iced-chocolate-milkshake-frappe-or-blend-image_15645289.jpg',
      route: '/menu/cold-non-coffee-drinks'
    },
    {
      title: 'Specialty / Signature Drinks',
      description: 'Unique house-crafted drinks you should try.',
      image: 'https://images.ctfassets.net/v601h1fyjgba/7vsbzdKuhl7JwsIyKleoTY/0289ba56dfc2c3484671a6a6005c7f59/15697_Keurig_CafeCreations_Spanish_Latte_Iced_COMP_Hi.jpg',
      route: '/menu/specialty-signature-drinks'
    },
    {
      title: 'Pastries & Baked Goods',
      description: 'Fresh pastries, cakes, and baked treats.',
      image: 'https://butterboyph.com/cdn/shop/files/classic.jpg?v=1714490336',
      route: '/menu/pastries-baked-goods'
    },

    {
      title: 'Breakfast Items',
      description: 'Breakfast meals and hearty morning bites.',
      image: 'https://www.espressomykitchen.com/wp-content/uploads/2024/04/EMK-california-breakfast-burrito-hero-02.jpg',
      route: '/menu/breakfast-items'
    },
    {
      title: 'Rice Meals',
      description: 'Hearty rice meals perfect for lunch or dinner.',
      image: 'https://graceland.ph/wp-content/uploads/2023/05/2-PCS.-PORK-BBQ.jpg',
      route: '/menu/rice-meals'
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
