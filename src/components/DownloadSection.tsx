'use client';

import { useState } from "react";
import ItinerarioImg from "../assets/Itinerarios/CanonUrique/Dia_1_Chihuahua_Barrancas_Premium_Museo_Revolucion_Casa_Antigua_Pancho_Villa.webp"; // <- ajusta el path si cambia
import type { StaticImageData } from 'next/image';

type DownloadSectionProps = {
  title: string;
  subtitle: string;
  dias: string;
  urlDescargar: string;
  imageSrc?: string | StaticImageData;     // opcional: reemplaza la imagen por defecto
  className?: string;    // opcional: clases extra en el <section>
};

export default function DownloadSection({
  title,
  subtitle,
  dias,
  urlDescargar,
  imageSrc,
  className,
}: DownloadSectionProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      // abre en nueva pestaña y evita acceso al opener
      window.open(urlDescargar, "_blank", "noopener,noreferrer");
      // console.log("Download initiated");
    }, 500);
  };

  const imgSrc = imageSrc
    ? (typeof imageSrc === 'string' ? imageSrc : imageSrc.src)
    : ItinerarioImg.src;

  return (
    <section className={["flex flex-col flex-wrap items-center mt-5 md:mt-20", className].join(" ")}>
      {/* Card */}
      <div className="flex flex-col align-center  justify-center gap-4 rounded-2xl border-2 border-[#2D2D31] p-5 max-w-[500px] mx-2">
        <img
          src={imgSrc}
          alt="Japan Premium Travel Documentación"
          className="block w-[80px] self-center h-[100px] sm:w-[180px] object-cover"
          loading="lazy"
        />
        <div className="text-center content-normal sm:p-2 ">
          <div className="flex flex-col items-center justify-center sm:justify-items-start">

            <div className="uppercase text-black text-[20px] sm:text-[28px] font-medium font-nohemi" style={{ fontFamily: 'Nohemi, sans-serif' }}>
              {title}
            </div>

            <div className="my-2.5 h-[1.5px] w-[90%] bg-brand-600 bg-[#8C2B2B]" />

            <div className="flex flex-col items-center gap-2.5 sm:justify-center">
              <div className="">
                <p className="text-black text-[18px] sm:text-[20px] font-nohemi leading-tight" style={{ fontFamily: 'Nohemi, Nohemi, sans-serif' }}>
                  {subtitle}
                </p>
              </div>
              <div className="text-black text-[18px] sm:text-[20px] font-nohemi leading-tight" style={{ fontFamily: 'Nohemi Light, Nohemi, sans-serif' }}>
                {dias}
              </div>

              <button
                onClick={handleDownload}
                disabled={isDownloading}
                aria-label="Descargar brochure del viaje"
                className={[
                  "inline-flex items-center justify-center gap-3 rounded",
                  "min-w-[180px] h-[50px] px-[25px] py-[15px]",
                  "bg-brand-600 bg-[#8C2B2B] text-black transition",
                  "hover:bg-[#BB0400]",
                  "disabled:opacity-50 disabled:cursor-not-allowed",
                  "backdrop-blur-sm",
                ].join(" ")}
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 inline-block"
                  aria-hidden="true"
                >
                  <path
                    d="M12.2617 16.075C12.1284 16.075 12.0034 16.0543 11.8867 16.013C11.7701 15.9717 11.6617 15.9007 11.5617 15.8L7.96172 12.2C7.76172 12 7.66572 11.7667 7.67372 11.5C7.68172 11.2333 7.77772 11 7.96172 10.8C8.16172 10.6 8.39939 10.496 8.67472 10.488C8.95005 10.48 9.18739 10.5757 9.38672 10.775L11.2617 12.65V5.5C11.2617 5.21667 11.3577 4.97934 11.5497 4.788C11.7417 4.59667 11.9791 4.50067 12.2617 4.5C12.5444 4.49934 12.7821 4.59534 12.9747 4.788C13.1674 4.98067 13.2631 5.218 13.2617 5.5V12.65L15.1367 10.775C15.3367 10.575 15.5744 10.479 15.8497 10.487C16.1251 10.495 16.3624 10.5993 16.5617 10.8C16.7451 11 16.8411 11.2333 16.8497 11.5C16.8584 11.7667 16.7624 12 16.5617 12.2L12.9617 15.8C12.8617 15.9 12.7534 15.971 12.6367 16.013C12.5201 16.055 12.3951 16.0757 12.2617 16.075ZM6.26172 20.5C5.71172 20.5 5.24105 20.3043 4.84972 19.913C4.45839 19.5217 4.26239 19.0507 4.26172 18.5V16.5C4.26172 16.2167 4.35772 15.9793 4.54972 15.788C4.74172 15.5967 4.97905 15.5007 5.26172 15.5C5.54439 15.4993 5.78205 15.5953 5.97472 15.788C6.16739 15.9807 6.26305 16.218 6.26172 16.5V18.5H18.2617V16.5C18.2617 16.2167 18.3577 15.9793 18.5497 15.788C18.7417 15.5967 18.9791 15.5007 19.2617 15.5C19.5444 15.4993 19.7821 15.5953 19.9747 15.788C20.1674 15.9807 20.2631 16.218 20.2617 16.5V18.5C20.2617 19.05 20.0661 19.521 19.6747 19.913C19.2834 20.305 18.8124 20.5007 18.2617 20.5H6.26172Z"
                    fill="white"
                  />
                </svg>

                <span className="leading-none text-white text-[20px] text-nohemi">
                  {isDownloading ? "Descargando..." : "Descargar"}
                </span>
              </button>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

