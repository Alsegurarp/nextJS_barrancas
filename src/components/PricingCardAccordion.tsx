'use client';

import { useState } from 'react';
import flechaNegra from '../assets/flecha_negra.svg';
import flechaBlanca from '../assets/flecha_blanca.svg';

// Type definitions
export interface RateItemData {
  title: string;
  price: string;
}

export interface PricingCardAccordionProps {
  seasonTitle: string;
  rates: RateItemData[];
  buttonText?: string;
  currency?: string;
  borderColor?: string;
  buttonColor?: string;
  buttonHoverColor?: string;
  isOpenByDefault?: boolean;
}

const RateItem = ({ 
  title, 
  price, 
  currency = "MXN PESOS",
  borderColor = "#9A3434" 
}: RateItemData & { 
  currency?: string;
  borderColor?: string;
}) => (
  <div className="bg-white rounded-xl shadow-sm w-full md:max-w-[400px] md:justify-self-center lg:w-[400px]">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-xs font-normal text-gray-700 uppercase font-nohemi" style={{fontFamily: 'Nohemi, sans-serif'}}>{title}</h3>
      <span 
        className="border-[1px] leading text-black rounded-md p-1 text-xs font-nohemi"
        style={{ borderColor, fontFamily: 'Nohemi, Nohemi, sans-serif' }}
      >
        {currency}
      </span>
    </div>
    <p className="text-[#192561] font-bold text-5xl font-nohemi" style={{fontFamily: 'Nohemi, sans-serif'}}>
      ${price}
      <span className="text-base font-thin text-gray-900 align-baseline">MXN</span>
    </p>
  </div>
);

const PricingCardAccordion: React.FC<PricingCardAccordionProps> = ({
  seasonTitle,
  rates,
  buttonText = "¡Reserva YA!",
  currency = "MXN PESOS",
  borderColor = "#8C2B2B",
  buttonColor = "#8C2B2B",
  buttonHoverColor = "#7f1d1d",
  isOpenByDefault = false
}) => {
  const [isOpen, setIsOpen] = useState(isOpenByDefault);

  return (
    <div className="font-nohemi p-1">
      <div className="max-w-4xl mx-auto">
        
        <div
          className={`border-2 border-solid text-white flex justify-between items-center p-4 py-4 rounded-xl cursor-pointer select-none relative ${isOpen ? 'bg-primary-800' : ''}`}
          style={{ borderColor }}
          onClick={() => {
            setIsOpen(prev => !prev);
            console.log('Accordion is now', !isOpen ? 'open' : 'closed');
          }}
        >
          <h2 className={`text-lg text-black font-normal text-center center font-nohemi ${isOpen ? 'text-white' : ''}`} style={{fontFamily: 'Nohemi, sans-serif'}}>{seasonTitle}</h2>
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
          <div className="pt-6">
            
            <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2">
              {rates.map((rate, index) => (
                <RateItem 
                  key={index}
                  title={rate.title}
                  price={rate.price}
                  currency={currency}
                  borderColor={borderColor}
                />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <button 
                className="text-white font-medium py-2 px-6 rounded-md transition-colors"
                style={{ 
                  backgroundColor: buttonColor,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = buttonHoverColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = buttonColor;
                }}
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCardAccordion;

