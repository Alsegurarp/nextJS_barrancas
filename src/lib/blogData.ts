import { StaticImageData } from 'next/image';
import barrancasCamping from '@/assets/adicional/barrancasCamping.jpg';
import barrancasGroup from '@/assets/adicional/barrancasGroup.jpg';
import barrancasHike from '@/assets/adicional/barrancasHike.jpg';
import barrancasRapidos from '@/assets/adicional/barrancasRapidos.jpg';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  contentDesktop?: string;
  image: StaticImageData;
  date: string;
  author: string;
  readTime: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'sounds-like-an-epic-hike',
    title: 'Sounds like an epic hike',
    description: 'Explore the stunning Barrancas del Cobre with expert guides and discover nature\'s hidden wonders.',
    content: 'Hiking through the Barrancas del Cobre is an unforgettable experience that combines breathtaking views, challenging terrain, and rich cultural heritage. Our guides are trained to ensure your safety while providing insights into the local flora, fauna, and history of this magnificent region.',
    contentDesktop: 'Our photography tours are led by experienced naturalists who know exactly where and when to find the best subjects. Learn professional photography techniques while documenting the incredible biodiversity of the area. We provide tips on composition, lighting, and camera settings to help you capture your best shots. All photographers—from beginners to professionals—will find this experience rewarding and inspiring.',
    image: barrancasHike,
    date: 'December 15, 2024',
    author: 'Adventure Team',
    readTime: '5 min',
    category: 'Adventure',
  },
  {
    id: '2',
    slug: 'family-friendly-camping-experience',
    title: 'Family Friendly Camping Experience',
    description: 'Create lasting memories with your family in the heart of Barrancas del Cobre.',
    content: 'Camping in Barrancas del Cobre offers the perfect blend of adventure and comfort for families. Our campsites are carefully selected to provide safe, accessible locations with modern amenities while maintaining that authentic nature experience.',
    contentDesktop: 'Our photography tours are led by experienced naturalists who know exactly where and when to find the best subjects. Learn professional photography techniques while documenting the incredible biodiversity of the area. We provide tips on composition, lighting, and camera settings to help you capture your best shots. All photographers—from beginners to professionals—will find this experience rewarding and inspiring.',
    image: barrancasCamping,
    date: 'December 10, 2024',
    author: 'Family Tours',
    readTime: '6 min',
    category: 'Family',
  },
  {
    id: '3',
    slug: 'discover-local-culture',
    title: 'Discover Local Culture and Traditions',
    description: 'Immerse yourself in the rich cultural heritage of the Barrancas region.',
    content: 'The Barrancas del Cobre region is home to several indigenous communities, each with unique traditions, crafts, and cuisines. Our cultural tours are designed to provide authentic interactions with local artisans, storytellers, and community members.',
    contentDesktop: 'Our photography tours are led by experienced naturalists who know exactly where and when to find the best subjects. Learn professional photography techniques while documenting the incredible biodiversity of the area. We provide tips on composition, lighting, and camera settings to help you capture your best shots. All photographers—from beginners to professionals—will find this experience rewarding and inspiring.',
    image: barrancasGroup,
    date: 'December 5, 2024',
    author: 'Cultural Guide',
    readTime: '7 min',
    category: 'Culture',
  },
  {
    id: '4',
    slug: 'wildlife-photography-guide',
    title: 'Wildlife Photography in the Canyons',
    description: 'Capture stunning moments with the diverse wildlife of Barrancas del Cobre.',
    content: 'Photography enthusiasts will find endless opportunities to capture the natural beauty of Barrancas del Cobre. From golden eagles soaring above the cliffs to colorful lizards basking on rocks, the region is teeming with wildlife. ',
    contentDesktop: 'Our photography tours are led by experienced naturalists who know exactly where and when to find the best subjects. Learn professional photography techniques while documenting the incredible biodiversity of the area. We provide tips on composition, lighting, and camera settings to help you capture your best shots. All photographers—from beginners to professionals—will find this experience rewarding and inspiring.',
    image: barrancasRapidos,
    date: 'November 28, 2024',
    author: 'Photography Expert',
    readTime: '6 min',
    category: 'Photography',
  },
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};
