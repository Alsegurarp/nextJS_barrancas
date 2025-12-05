'use client';

import React from 'react'
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
  { label: <FaTiktok />, link: 'https://www.tiktok.com/@viajespremium' },
  { label: <FaYoutube />, link: 'https://www.youtube.com/@viajespremiumelevatuvida' },
  { label: <FaInstagram />, link: 'https://www.instagram.com/barrancaspremium/' },
  { label: <FaSpotify />, link: 'https://open.spotify.com/show/4VmUesUcK08SIuxLxsl3dF?si=9c17c780a78549d1' }
];

import logoBarrancas from '../../../assets/Barrancas_mobile_negro.svg';
import { FaFacebookF, FaTiktok, FaInstagram, FaYoutube, FaSpotify } from 'react-icons/fa6';




function usage() {
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
      logoUrl={logoBarrancas.src}
      accentColor="#963825"
    />
  )
}

export default usage

