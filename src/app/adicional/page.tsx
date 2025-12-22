'use client';

import Image from 'next/image';
import React from 'react';
import Usage from '@/components/Layout/Navbar/usage';
import CustomCursor from '@/Componentes/utils/CustomCursor';
import WhatsappButton from '@/Componentes/utils/WhatsappButton';
import DarkModeButton from '@/Componentes/utils/DarkModeButton';
import Footer from '@/components-gsap/Footer';
import TopAdicionales from '@/views/Adicionales/TopAdicionales';
import HeroItinerario from '@/sections/HeroItinerario';
import ExperienciasAdicionales from '@/views/Adicionales/ExperienciasAdicionales';

// images
import image1 from '@/assets/Portadas/HeroImage.webp';
import Top3Descriptions from '@/views/Adicionales/Top3Descriptions';

export default function AdicionalPage() {
  return (
    <>
      <div className='wrapper'>
          <Usage />
          <CustomCursor />
          <DarkModeButton />
          <WhatsappButton />
        <HeroItinerario 
          title="Haz de tu experiencia algo único."
          subtitle="Haz tu experiencia única"
          backgroundImage={image1}
          duration="no habilitado"
        />
        {/* las que mas queremos vender - Se debe definir si al dar click te manda a contacto o al blog donde se habla de cada uno*/}
        <TopAdicionales />

        {/* Cada uno tiene navegacion interna, le das click y te abre detalles del contenido */}
        <ExperienciasAdicionales />

        <Top3Descriptions />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}