import { Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Gallery } from './pages/gallery/gallery';
import { Contact } from './pages/contact/contact';

import { Feedback } from './pages/feedback/feedback';
import { AddFeedback } from './pages/add-feedback/add-feedback';
import { MyFeedback } from './pages/my-feedback/my-feedback';
import { EditFeedback } from './pages/edit-feedback/edit-feedback';

// MENU
import { Menu } from './pages/menu/menu';
import { AllMenu } from './pages/menu/all-menu/all-menu';
import { HotCoffee } from './pages/menu/hot-coffee/hot-coffee';
import { IcedCoffee } from './pages/menu/iced-coffee/iced-coffee';
import { NonCoffeeHotDrinks } from './pages/menu/non-coffee-hot-drinks/non-coffee-hot-drinks';
import { ColdNonCoffeeDrinks } from './pages/menu/cold-non-coffee-drinks/cold-non-coffee-drinks';
import { SpecialtySignatureDrinks } from './pages/menu/specialty-signature-drinks/specialty-signature-drinks';
import { PastriesBakedGoods } from './pages/menu/pastries-baked-goods/pastries-baked-goods';
import { BreakfastItems } from './pages/menu/breakfast-items/breakfast-items';
import { RiceMeals } from './pages/menu/rice-meals/rice-meals';

// NEW LEGAL PAGES
import { Terms } from './pages/legal/terms/terms';
import { Privacy } from './pages/legal/privacy/privacy';
import { Cookies } from './pages/legal/cookies/cookies';

export const routes: Routes = [
  { path: '', component: Home },

  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'about', component: About },
  { path: 'gallery', component: Gallery },
  { path: 'contact', component: Contact },

  // FEEDBACK ROUTES
  { path: 'feedback', component: Feedback },
  { path: 'add-feedback', component: AddFeedback },
  { path: 'my-feedback', component: MyFeedback },
  { path: 'edit-feedback/:id', component: EditFeedback },

  // MENU ROUTES
  { path: 'menu', component: Menu },{ path: 'menu/all', component: AllMenu },
  { path: 'menu/hot-coffee', component: HotCoffee },
  { path: 'menu/iced-coffee', component: IcedCoffee },
  { path: 'menu/non-coffee-hot-drinks', component: NonCoffeeHotDrinks },
  { path: 'menu/cold-non-coffee-drinks', component: ColdNonCoffeeDrinks },
  { path: 'menu/specialty-signature-drinks', component: SpecialtySignatureDrinks },
  { path: 'menu/pastries-baked-goods', component: PastriesBakedGoods },
  { path: 'menu/breakfast-items', component: BreakfastItems },

  { path: 'menu/rice-meals',component: RiceMeals},

  // LEGAL ROUTES
  { path: 'terms', component: Terms },
  { path: 'privacy', component: Privacy },
  { path: 'cookies', component: Cookies },

  // 404 fallback
  { path: '**', redirectTo: '' }
];
