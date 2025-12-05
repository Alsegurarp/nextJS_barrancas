'use client';

import React from 'react'
import { useState } from 'react';
import flechaNegra from '../assets/flecha_negra.svg';
import flechaBlanca from '../assets/flecha_blanca.svg';

export interface IncluyeItemData {
  title: string;
}

export interface ListaNoIncluyeProps {
  mainTitle: string;
  listados: IncluyeItemData[];
  buttonText?: string;
  buttonColor?: string;
  buttonHoverColor?: string;
  isOpenByDefault?: boolean;
}

const IncluyeDataItem = ({ 
  title, 
}: IncluyeItemData) => (
    <ul className="flex items-center text-start self-start mb-1 list-disc pl-5">
      <li className="text-xs font-normal text-black uppercase font-nohemi" style={{fontFamily: 'Nohemi, sans-serif'}}>{title}</li>
    </ul>
);

const IncluyeNoIncluye: React.FC<ListaNoIncluyeProps> = ({
  mainTitle,
  listados,
  isOpenByDefault = false
}) => {
  const [isOpen, setIsOpen] = useState(isOpenByDefault);

  return (
    <div className="font-nohemi p-1">
      <div className="max-w-4xl mx-auto">
        
        <div
          className={`border-2 border-primary-800 text-white flex justify-between items-center p-4 py-4 rounded-xl cursor-pointer select-none relative ${isOpen ? 'bg-primary-800' : ''}`}
          onClick={() => {
            setIsOpen(prev => !prev);
            console.log('Accordion is now', !isOpen ? 'open' : 'closed');
          }}
        >
          <h2 className={`text-lg text-black font-normal text-center center font-nohemi ${isOpen ? 'text-white' : ''}`} style={{fontFamily: 'Nohemi, sans-serif'}}>{mainTitle}</h2>
          <div className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>
            <img src={isOpen ? flechaBlanca.src : flechaNegra.src} alt="Toggle Accordion" className="w-4 h-4" />
          </div>
        </div>

        
        <div
          className="transition-all duration-500 ease-in-out overflow-hidden"
          style={{
            maxHeight: isOpen ? '1000px' : '0px',
            opacity: isOpen ? 1 : 0,
            pointerEvents: isOpen ? 'auto' : 'none',
          }}
        >
          <div className="p-2">
            <div className="flex flex-col gap-1 sm:grid md:grid-cols-2 p-2">
              {listados.map((rate, index) => (
                <IncluyeDataItem 
                  key={index}
                  title={rate.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncluyeNoIncluye;

