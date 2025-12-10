'use client';

import React, { useState, useEffect } from 'react'
import StaggeredMenu from '../../../components/StaggeredMenu';

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'Itinerarios', ariaLabel: 'Learn about us', link: '/prueba' },
  { label: 'Hoteles', ariaLabel: 'View our services', link: '/services' },
  { label: 'Nosotros', ariaLabel: 'Get in touch', link: '/contact' },
  { label: 'Contacto', ariaLabel: 'Get in touch', link: '/contact' },
  { label: 'Blog', ariaLabel: 'Get in touch', link: '/contact' }
];


const socialItems = [
  { label: <FaFacebookF />, link: 'https://www.facebook.com/barrancasdelcobrepremiumoficial' },
  { label: <FaInstagram />, link: 'https://www.instagram.com/barrancaspremium/' },
  { label: <FaYoutube />, link: 'https://www.youtube.com/@viajespremiumelevatuvida' },
  { label: <FaTiktok />, link: 'https://www.tiktok.com/@viajespremium' },
  { label: <FaSpotify />, link: 'https://open.spotify.com/show/4VmUesUcK08SIuxLxsl3dF?si=9c17c780a78549d1' }
];

import logoBarrancas from '../../../assets/Barrancas_mobile_negro.svg';
import logoBarrancasBlanco from '../../../assets/Barrancas_mobile_blanco.svg';
import { FaFacebookF, FaTiktok, FaInstagram, FaYoutube, FaSpotify } from 'react-icons/fa6';




function Usage() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });

  useEffect(() => {
    // Listen for dark mode changes
    const observer = new MutationObserver(() => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      isFixed={true}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      menuButtonColor="#000"
      openMenuButtonColor="#000"
      changeMenuColorOnOpen={true}
      colors={['#e48853', '#d05226', '#963825']}
      logoUrl={isDark ? logoBarrancasBlanco.src : logoBarrancas.src}
      accentColor="#963825"
    />
  )
}

export default Usage

