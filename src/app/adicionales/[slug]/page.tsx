'use client';

import React from 'react';
import Usage from '@/components/Layout/Navbar/usage';
import CustomCursor from '@/Componentes/utils/CustomCursor';
import WhatsappButton from '@/Componentes/utils/WhatsappButton';
import DarkModeButton from '@/Componentes/utils/DarkModeButton';
import Footer from '@/components-gsap/Footer';
import AdicionalDetalle from '@/views/Adicionales/AdicionalDetalle';

export default function AdicionalDetailPage() {
  return (
    <>
      <div className='wrapper'>
        <Usage />
        <CustomCursor />
        <DarkModeButton />
        <WhatsappButton />

        <AdicionalDetalle />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
