import { Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Feedback } from './pages/feedback/feedback';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Menu } from './pages/menu/menu';
import { Gallery } from './pages/gallery/gallery';
import { Contact } from './pages/contact/contact';
import { Reservation } from './pages/reservation/reservation';

// NEW LEGAL PAGES
import { Terms } from './pages/legal/terms/terms';
import { Privacy } from './pages/legal/privacy/privacy';
import { Cookies } from './pages/legal/cookies/cookies';

export const routes: Routes = [
  { path: '', component: Home },

  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'feedback', component: Feedback },

  { path: 'about', component: About },
  { path: 'menu', component: Menu },
  { path: 'gallery', component: Gallery },
  { path: 'contact', component: Contact },
  { path: 'reservation', component: Reservation },

  // ✅ LEGAL ROUTES
  { path: 'terms', component: Terms },
  { path: 'privacy', component: Privacy },
  { path: 'cookies', component: Cookies },

  // 404 fallback
  { path: '**', redirectTo: '' }
];
