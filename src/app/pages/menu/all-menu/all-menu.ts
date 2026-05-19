import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './all-menu.html',
  styleUrl: './all-menu.css'
})
export class AllMenu {
  showBackToTop: boolean = false;

  menu = [
    {
      title: 'Hot Coffee',
      icon: 'fas fa-fire',
      items: [
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
      ]
    },
    {
      title: 'Iced Coffee',
      icon: 'fas fa-snowflake',
      items: [
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
      ]
    },
    {
      title: 'Non-Coffee Hot Drinks',
      icon: 'fas fa-mug-hot',
      items: [
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
      ]
    },
    {
      title: 'Cold Non-Coffee Drinks',
      icon: 'fas fa-glass-water',
      items: [
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
      ]
    },
    {
      title: 'Specialty Drinks',
      icon: 'fas fa-star',
      items: [
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
      ]
    },
    {
      title: 'Breakfast Items',
      icon: 'fas fa-bread-slice',
      items: [
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
      ]
    },
    {
      title: 'Pastries',
      icon: 'fas fa-cookie',
      items: [
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
      ]
    },
    {
      title: 'Rice Meals',
      icon: 'fas fa-bowl-rice',
      items: [
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
      ]
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
