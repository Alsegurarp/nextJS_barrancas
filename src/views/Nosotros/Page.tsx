import React from 'react';
import HeroNosotros from '@/sections/nosotros/HeroNosotros';
import PorqueNosotros from '@/sections/nosotros/PorqueNosotros';
import Usage from '@/components/Layout/Navbar/usage';
import CustomCursor from '@/Componentes/utils/CustomCursor';
import DarkModeButton from '@/Componentes/utils/DarkModeButton';
import WhatsappButton from '@/Componentes/utils/WhatsappButton';
import ConoceMas from '@/sections/nosotros/ConoceMas';
import NuestrosServicios from '@/sections/nosotros/NuestrosServicios';

function Page() {
  return (
    <>
        <div className="wrapper">
                <Usage />
                <CustomCursor />
                <DarkModeButton />
                <WhatsappButton />
            <HeroNosotros />
            <PorqueNosotros />
            <ConoceMas />
            <NuestrosServicios />
        </div>
    </>
  )
}

export default Page