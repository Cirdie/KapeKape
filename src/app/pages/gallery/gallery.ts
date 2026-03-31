import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery {
  activeFilter = 'all';
  selectedImage: string | null = null;
  selectedAlt = '';

  galleryItems = [
    {
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600',
      alt: 'Coffee Art',
      category: 'coffee'
    },
    {
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600',
      alt: 'Interior',
      category: 'interior'
    },
    {
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600',
      alt: 'Latte Art',
      category: 'coffee'
    },
    {
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600',
      alt: 'Food',
      category: 'food'
    },
    {
      image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800',
      alt: 'Café Interior',
      category: 'interior'
    },
    {
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600',
      alt: 'Events',
      category: 'events'
    },
    {
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600',
      alt: 'Cold Brew',
      category: 'coffee'
    },
    {
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600',
      alt: 'Pastry',
      category: 'food'
    },
    {
      image: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600',
      alt: 'Seating',
      category: 'interior'
    },
    {
      image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800',
      alt: 'Event',
      category: 'events'
    },
    {
      image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=600',
      alt: 'Filter Coffee',
      category: 'coffee'
    },
    {
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600',
      alt: 'Cake',
      category: 'food'
    },
    {
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600',
      alt: 'Coffee Beans',
      category: 'events'
    }
  ];

  setFilter(filter: string): void {
    this.activeFilter = filter;
  }

  get filteredGalleryItems() {
    if (this.activeFilter === 'all') {
      return this.galleryItems;
    }

    return this.galleryItems.filter(item => item.category === this.activeFilter);
  }

  openLightbox(image: string, alt: string): void {
    this.selectedImage = image;
    this.selectedAlt = alt;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.selectedImage = null;
    this.selectedAlt = '';
    document.body.style.overflow = '';
  }
}
