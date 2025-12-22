import React from 'react';
import Contacto from '@/sections/nosotros/Contacto';
import Usage from '@/components/Layout/Navbar/usage';
import CustomCursor from '@/Componentes/utils/CustomCursor';
import DarkModeButton from '@/Componentes/utils/DarkModeButton';
import WhatsappButton from '@/Componentes/utils/WhatsappButton';
import Footer from '@/components-gsap/Footer';

function Page() {
  return (
          <div className='wrapper'>
          <Usage />
          <CustomCursor />
          <DarkModeButton />
          <WhatsappButton />
        <Contacto />


        {/* Footer */}
        <Footer />
      </div>
  )
}

export default Page

