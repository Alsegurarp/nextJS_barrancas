'use client';

//import ImageTrail from './ImageTrail;'
import React from 'react';
import ImageTrail from "@/components/ImageTrail";
import imagen1 from '@/assets/Itinerarios/CanonUrique/Dia_1_Chihuahua_Barrancas_Premium_Museo_Revolucion_Casa_Antigua_Pancho_Villa.webp';
import imagen2 from '@/assets/Itinerarios/CanonUrique/Dia_2_Chihuahua_Barrancas_Premium_Pueblo_MAgico_Creel_Cueva_Tarahumara_Habitada_Viajes_Turismo.webp';
import imagen3 from '@/assets/Itinerarios/CanonUrique/Dia_3_Barrancas_Del_Cobre_Barrancas_Premium_Parque_Aventura_Teleferico_Descenso_Barranca_Urique_Majestuosidad.webp';

const images = [{
  src: imagen1, alt: 'Imagen 1'
}, {
  src: imagen2, alt: 'Imagen 2'
}, {
  src: imagen3, alt: 'Imagen 3'
}, {
  src: imagen1, alt: 'Imagen 4'
}, {
  src: imagen2, alt: 'Imagen 5'
}, {
  src: imagen3, alt: 'Imagen 6'
},
];

function CursorImages() {
  return (
    <ImageTrail
      key={images.map(img => img.alt).join('-')}
      items={images.map(img => img.src.src)}
      variant={1} />
  )
}

export default CursorImages

