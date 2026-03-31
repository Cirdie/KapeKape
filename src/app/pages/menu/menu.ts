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
  selectedFilter: string = 'all';
  showBackToTop: boolean = false;

  setFilter(filter: string): void {
    this.selectedFilter = filter;
  }

  isVisible(category: string): boolean {
    return this.selectedFilter === 'all' || this.selectedFilter === category;
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.showBackToTop = window.scrollY > 400;
  }

  scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
