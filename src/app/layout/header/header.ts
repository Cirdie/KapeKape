import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  isScrolled = false;
  isLoggedIn = false;
  currentRoute = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentRoute = this.router.url;
    this.checkLoginStatus();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.urlAfterRedirects || event.url;
        this.checkLoginStatus();
      });

    window.addEventListener('storage', () => {
      this.checkLoginStatus();
    });
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  checkLoginStatus(): void {
    this.isLoggedIn = !!localStorage.getItem('currentUser');
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
