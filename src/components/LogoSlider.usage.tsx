'use client';

import LogoSlider from '@/components/LogoSlider';

/**
 * Example usage of the LogoSlider component with lazy loading
 */

// Example 1: Basic usage with lazy loading (recommended for performance)
const basicExample = () => {
  const logos = [
    { src: 'https://navneetdwivedi.github.io/Logo_Slider/logo.png', alt: 'Logo 1' },
    { src: 'https://navneetdwivedi.github.io/Logo_Slider/logo.png', alt: 'Logo 2' },
    { src: 'https://navneetdwivedi.github.io/Logo_Slider/logo.png', alt: 'Logo 3' },
    { src: 'https://navneetdwivedi.github.io/Logo_Slider/logo.png', alt: 'Logo 4' },
    { src: 'https://navneetdwivedi.github.io/Logo_Slider/logo.png', alt: 'Logo 5' },
  ];

  return (
    <LogoSlider
      logos={logos}
      speed={35}
      height={100}
      gap={20}
      pauseOnHover={true}
      showGradient={true}
      lazyLoad={true}
      lazyLoadMargin="100px"
    />
  );
};

// Example 2: With clickable links and lazy loading
const withLinksExample = () => {
  const logos = [
    {
      src: 'https://navneetdwivedi.github.io/Logo_Slider/logo.png',
      alt: 'Company 1',
      href: 'https://company1.com',
    },
    {
      src: 'https://navneetdwivedi.github.io/Logo_Slider/logo.png',
      alt: 'Company 2',
      href: 'https://company2.com',
    },
    {
      src: 'https://navneetdwivedi.github.io/Logo_Slider/logo.png',
      alt: 'Company 3',
      href: 'https://company3.com',
    },
  ];

  return (
    <LogoSlider
      logos={logos}
      speed={40}
      height={80}
      gap={30}
      direction="left"
      pauseOnHover={true}
      lazyLoad={true}
      lazyLoadMargin="150px"
    />
  );
};

// Example 3: Custom styling with aggressive lazy loading
const customExample = () => {
  const logos = [
    { src: 'https://navneetdwivedi.github.io/Logo_Slider/logo.png', alt: 'Logo 1' },
    { src: 'https://navneetdwivedi.github.io/Logo_Slider/logo.png', alt: 'Logo 2' },
  ];

  return (
    <LogoSlider
      logos={logos}
      speed={30}
      height={120}
      gap={40}
      direction="right"
      pauseOnHover={false}
      showGradient={true}
      gradientColor="#f3f4f6"
      className="bg-gray-50 rounded-lg"
      lazyLoad={true}
      lazyLoadMargin="200px"
    />
  );
};

// Example 4: Without lazy loading (for above-the-fold content)
const noLazyLoadExample = () => {
  const logos = [
    { src: 'https://navneetdwivedi.github.io/Logo_Slider/logo.png', alt: 'Logo 1' },
    { src: 'https://navneetdwivedi.github.io/Logo_Slider/logo.png', alt: 'Logo 2' },
  ];

  return (
    <LogoSlider
      logos={logos}
      speed={35}
      height={100}
      lazyLoad={false}
    />
  );
};

export { basicExample, withLinksExample, customExample, noLazyLoadExample };


