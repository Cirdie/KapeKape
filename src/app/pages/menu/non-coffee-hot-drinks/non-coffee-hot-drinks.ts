import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-non-coffee-hot-drinks',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './non-coffee-hot-drinks.html',
  styleUrl: './non-coffee-hot-drinks.css'
})
export class NonCoffeeHotDrinks {
  showBackToTop: boolean = false;

  items = [
     {
          name: 'Classic Hot Chocolate',
          description: 'Rich and velvety hot chocolate topped with a smooth, comforting finish.',
          price: '₱ 155',
          image: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https%3A%2F%2Farc-anglerfish-washpost-prod-washpost.s3.amazonaws.com%2Fpublic%2FXO2CESCABTVSBKS6IE7DH5IGTU.jpg?h=982&w=1200',
          badge: 'Popular'
        },
        {
          name: 'Matcha Latte',
          description: 'Premium matcha blended with steamed milk for a smooth and earthy flavor.',
          price: '₱ 170',
          image: 'https://www.justonecookbook.com/wp-content/uploads/2025/12/Matcha-Latte-4598-I-2-500x375.jpg',
          badge: ''
        },
        {
          name: 'Spiced BeanLatte',
          description: 'Warm Beantea infused with cinnamon, ginger, and milk for a cozy cup.',
          price: '₱ 145',
          image: 'https://img.freepik.com/premium-photo/cup-hot-vanilla-bean-latte_1234738-50132.jpg',
          badge: 'Bestseller'
        },
        {
          name: 'Hot Milk Tea',
          description: 'Creamy milk tea served warm with a balanced sweetness and soothing aroma.',
          price: '₱ 140',
          image: 'https://www.justonecookbook.com/wp-content/uploads/2020/04/Royal-Milk-Tea-4730-I.jpg',
          badge: ''
        },
        {
          name: 'Honey Lemon Tea',
          description: 'A light and refreshing hot tea with lemon and honey for a gentle citrus taste.',
          price: '₱ 125',
          image: 'https://images.cookforyourlife.org/wp-content/uploads/2018/08/Lemon-and-Honey.jpg',
          badge: 'Must Try'
        },
        {
          name: 'Warm Vanilla Steamer',
          description: 'Steamed milk with vanilla flavor, soft and comforting for a cozy treat.',
          price: '₱ 135',
          image: 'https://www.simplystacie.net/wp-content/uploads/2020/07/Feb_Butterscotch_Steamer_Websize013.jpg',
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
