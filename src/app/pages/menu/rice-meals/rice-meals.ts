import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rice-meals',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './rice-meals.html',
  styleUrl: './rice-meals.css'
})
export class RiceMeals {
  showBackToTop: boolean = false;

  items = [
    {
          name: 'Chicken Teriyaki Rice',
          description: 'Grilled chicken glazed with teriyaki sauce served over steamed rice.',
          price: '₱ 195',
          image: 'https://www.onceuponachef.com/images/2024/01/chicken-teriyaki.jpg',
          badge: 'Bestseller'
        },
        {
          name: 'Beef Pepper Rice',
          description: 'Savory beef slices with pepper sauce served hot over rice.',
          price: '₱ 210',
          image: 'https://takestwoeggs.com/wp-content/uploads/2025/03/Beef-Pepper-Rice-cooked.jpg',
          badge: ''
        },
        {
          name: 'Garlic Butter Chicken Rice',
          description: 'Juicy chicken tossed in garlic butter served with fragrant rice.',
          price: '₱ 185',
          image: 'https://diethood.com/wp-content/uploads/2018/08/garlic-butter-chicken-rice-5.jpg',
          badge: 'Popular'
        },
        {
          name: 'Pork BBQ Rice Meal',
          description: 'Sweet and smoky pork barbecue served with rice and pickled sides.',
          price: '₱ 175',
          image: 'https://graceland.ph/wp-content/uploads/2023/05/2-PCS.-PORK-BBQ.jpg',
          badge: ''
        },
        {
          name: 'Bangus Sisig Rice',
          description: 'Crispy milkfish sisig served sizzling with rice.',
          price: '₱ 190',
          image: 'https://www.lolagroupe.com/cdn/shop/products/BangusSisigRice2_e2e0b508-8f51-4acd-9312-c8d5383a180f.jpg?v=1658986543',
          badge: 'Must Try'
        },
        {
          name: 'Fried Chicken Rice Meal',
          description: 'Crispy fried chicken paired with rice and gravy.',
          price: '₱ 170',
          image: 'https://graceland.ph/wp-content/uploads/2023/05/1-PC.-CHICKEN-MEAL.jpg',
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
