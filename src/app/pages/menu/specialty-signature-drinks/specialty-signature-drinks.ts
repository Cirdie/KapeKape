import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-specialty-signature-drinks',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './specialty-signature-drinks.html',
  styleUrl: './specialty-signature-drinks.css'
})
export class SpecialtySignatureDrinks {
  showBackToTop: boolean = false;

  items = [
    {
          name: 'Spanish Latte',
          description: 'A smooth espresso-based drink with creamy milk and a sweet signature finish.',
          price: '₱ 185',
          image: 'https://images.ctfassets.net/v601h1fyjgba/7vsbzdKuhl7JwsIyKleoTY/0289ba56dfc2c3484671a6a6005c7f59/15697_Keurig_CafeCreations_Spanish_Latte_Iced_COMP_Hi.jpg',
          badge: 'Bestseller'
        },
        {
          name: 'Sea Salt Caramel Latte',
          description: 'Rich espresso with velvety milk, caramel sweetness, and a hint of sea salt.',
          price: '₱ 195',
          image: 'https://mathieuteisseire.com/cdn/shop/articles/recipe-168-sea-salt-caramel-latte.jpg?v=1765493279',
          badge: 'Popular'
        },
        {
          name: 'Brown Sugar Cinnamon Latte',
          description: 'A warm and flavorful latte infused with brown sugar and cinnamon spice.',
          price: '₱ 190',
          image: 'https://media.bluediamond.com/uploads/2023/02/22171930/2_Cinnamon_Brown_Sugar_Latte_FY23_New_Recipes_P_22-blu-0153-scaled.jpg',
          badge: ''
        },
        {
          name: 'Hazelnut Praline Mocha',
          description: 'Chocolate and espresso blended with hazelnut notes for a decadent café treat.',
          price: '₱ 205',
          image: 'https://wideawakecoffee.com/wp-content/uploads/2023/07/Hazelnut-mocha-001-1-scaled-e1697053277227.jpg',
          badge: 'Must Try'
        },
        {
          name: 'Signature Matcha Cloud',
          description: 'Creamy matcha layered with soft milk foam for a refined house specialty.',
          price: '₱ 195',
          image: 'https://www.paperandtea.com/cdn/shop/articles/coconut_matcha_cloud_drink_0ce42227-df32-4475-9241-fd39a47f2796.jpg?v=1769446674&width=1200',
          badge: ''
        },
        {
          name: 'Roasted Vanilla Cream Brew',
          description: 'A smooth specialty brew topped with silky vanilla cream and a roasted finish.',
          price: '₱ 200',
          image: 'https://t4.ftcdn.net/jpg/06/53/78/73/360_F_653787364_RSq2W0SuSzTB4G8owzSmkGkEZdy6s4ud.jpg',
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
