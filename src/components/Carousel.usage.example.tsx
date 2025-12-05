'use client';

import Carousel from './Carousel';
import type { CarouselItem } from './Carousel';

// Example 1: Each item has its own background image
export function CarouselWithPerItemBackgrounds() {
  const items: CarouselItem[] = [
    { 
      id: 1, 
      title: 'Mountain View', 
      description: 'Breathtaking peaks', 
      icon: <span>�️</span>,
      backgroundImage: '/images/mountain.jpg',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    },
    { 
      id: 2, 
      title: 'Ocean Waves', 
      description: 'Crystal clear waters', 
      icon: <span>🌊</span>,
      backgroundImage: '/images/ocean.jpg',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    },
    { 
      id: 3, 
      title: 'Forest Trail', 
      description: 'Green wilderness', 
      icon: <span>🌲</span>,
      backgroundImage: '/images/forest.jpg',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    },
  ];

  return (
    <Carousel
      items={items}
      baseWidth={400}
      autoplay={true}
      autoplayDelay={3000}
      pauseOnHover={true}
    />
  );
}

// Example 2: Mix of items with and without backgrounds (fallback to global)
export function CarouselMixedBackgrounds() {
  const items: CarouselItem[] = [
    { 
      id: 1, 
      title: 'Custom BG', 
      description: 'Has its own image', 
      icon: <span>🎨</span>,
      backgroundImage: '/images/custom1.jpg'
    },
    { 
      id: 2, 
      title: 'Global BG', 
      description: 'Uses fallback', 
      icon: <span>🚀</span>
      // No backgroundImage, will use global backgroundImage prop
    },
    { 
      id: 3, 
      title: 'Custom BG 2', 
      description: 'Another custom', 
      icon: <span>⭐</span>,
      backgroundImage: '/images/custom2.jpg'
    },
  ];

  return (
    <Carousel
      items={items}
      baseWidth={400}
      autoplay={true}
      backgroundImage="/images/default-background.jpg" // Fallback for items without backgroundImage
    />
  );
}

// Example 2: Round carousel with background
export function RoundCarouselWithBackground() {
  const items: CarouselItem[] = [
    { id: 1, title: 'Item 1', description: 'Description 1', icon: <span>🎨</span> },
    { id: 2, title: 'Item 2', description: 'Description 2', icon: <span>🚀</span> },
    { id: 3, title: 'Item 3', description: 'Description 3', icon: <span>⭐</span> },
  ];

  return (
    <Carousel
      items={items}
      baseWidth={300}
      round={true}
      autoplay={true}
      backgroundImage="https://images.unsplash.com/photo-1557683316-973673baf926"
      backgroundPosition="center center"
      backgroundSize="cover"
    />
  );
}

// Example 3: Looping carousel with different background positioning
export function LoopingCarouselCustomBackground() {
  const items: CarouselItem[] = [
    { id: 1, title: 'Nature', description: 'Beautiful landscapes', icon: <span>🏔️</span> },
    { id: 2, title: 'Ocean', description: 'Deep blue waters', icon: <span>🌊</span> },
    { id: 3, title: 'Forest', description: 'Green wilderness', icon: <span>🌲</span> },
    { id: 4, title: 'Desert', description: 'Sandy dunes', icon: <span>🏜️</span> },
  ];

  return (
    <Carousel
      items={items}
      baseWidth={500}
      loop={true}
      autoplay={true}
      autoplayDelay={2500}
      pauseOnHover={true}
      backgroundImage="/images/scenic-background.jpg"
      backgroundPosition="top center"
      backgroundSize="contain"
    />
  );
}

// Example 4: Responsive mobile-first carousel
export function ResponsiveCarousel() {
  const items: CarouselItem[] = [
    { id: 1, title: 'Mobile First', description: 'Scales perfectly', icon: <span>📱</span> },
    { id: 2, title: 'Tablet Ready', description: 'Looks great', icon: <span>💻</span> },
    { id: 3, title: 'Desktop', description: 'Full experience', icon: <span>🖥️</span> },
  ];

  return (
    <div className="w-full px-4 md:px-8 lg:px-12">
      <Carousel
        items={items}
        baseWidth={600}
        autoplay={false}
        pauseOnHover={true}
        backgroundImage="/images/gradient-background.png"
      />
    </div>
  );
}

// Example 5: Without background image (default behavior)
export function DefaultCarousel() {
  const items: CarouselItem[] = [
    { id: 1, title: 'Default', description: 'No background', icon: <span>✨</span> },
    { id: 2, title: 'Classic', description: 'Solid colors', icon: <span>🎯</span> },
  ];

  return (
    <Carousel
      items={items}
      baseWidth={350}
      autoplay={true}
    />
  );
}


