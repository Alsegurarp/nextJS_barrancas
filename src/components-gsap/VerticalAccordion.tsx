'use client';

import { FiDollarSign } from "react-icons/fi";
import { GiMountains } from "react-icons/gi";
import { AiOutlineQuestion } from "react-icons/ai";
import { FaPlaneArrival } from "react-icons/fa6";
import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "./useWindowSize";
import type { IconType } from "react-icons";

const VerticalAccordion = () => {
  const [open, setOpen] = useState<number | null>(1);

  return (
    <section className="h-3/4 w-full justify-start items-center flex flex-col">
      <div className="flex flex-col h-full w-full lg:w-[600px] xl:w-[800px] lg:px-0 lg:mx-auto overflow-hidden mb-[25%] md:mb-0">
        {items.map((item) => {
          return (
            <Panel
              key={item.id}
              open={open}
              setOpen={setOpen}
              id={item.id}
              Icon={item.Icon}
              title={item.title}
              imgSrc={item.imgSrc}
              description={item.description}
            />
          );
        })}
      </div>
    </section>
  );
};

interface PanelProps {
  open: number | null;
  setOpen: Dispatch<SetStateAction<number | null>>;
  id: number;
  Icon: IconType;
  title: string;
  imgSrc: string;
  description: string;
}

const Panel = ({
  open,
  setOpen,
  id,
  Icon,
  title,
  imgSrc,
  description,
}: PanelProps) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className="bg-primary-800/60 dark:bg-black/25 backdrop-blur-xs dark:backdrop-blur-lg rounded-full dark:rounded-full py-2 px-4 mb-2 hover:bg-primary-800/35 dark:hover:bg-black/35 transition-all duration-300 flex flex-row-reverse justify-end items-center gap-2 relative group dark:border dark:border-white/20 dark:shadow-[inset_0_1px_10px_rgba(255,255,255,0.1)] dark:before:absolute dark:before:inset-0 dark:before:rounded-full dark:before:bg-linear-to-br dark:before:from-white/10 dark:before:via-transparent dark:before:to-transparent dark:before:opacity-50 dark:before:pointer-events-none dark:after:absolute dark:after:inset-0 dark:after:rounded-full dark:after:bg-linear-to-tl dark:after:from-white/10 dark:after:via-transparent dark:after:to-transparent dark:after:opacity-40 dark:after:pointer-events-none"
        onClick={() => !isOpen && setOpen(id)}
      >
        <span
          style={{
            writingMode: "vertical-rl",
          }}
          className="hidden text-base rotate-180">
          {title}
        </span>
        <span className="text-start block text-sm text-white sm:text-lg md:text-xl">{title}</span>
        <div className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 aspect-square rounded-full bg-white/25 dark:bg-black/20 border border-white/40 backdrop-blur-2xl text-white grid place-items-center">
          <Icon className="text-base md:text-lg lg:text-xl" />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width <= 780 ? panelVariantsSm : (width && width >= 1420 ? panelVariants : panelVariantsLg)}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full h-full overflow-hidden relative bg-black flex items-end rounded-2xl my-1 lg:rounded-2xl"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="w-full py-2 text-sm lg:text-base sm:px-4 sm:py-2 bg-black/20 px-2 backdrop-blur-xs text-white text-center"
            >
              <p>{description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VerticalAccordion;

const panelVariants = {
  open: {
    width: "100%",
    height: "60%",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const panelVariantsLg = {
  open: {
    width: "100%",
    height: "40%",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

// small devices
const panelVariantsSm = {
  open: {
    width: "100%",
    height: "40%",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};

const items = [
  {
    id: 1,
    title: "¿Qué es el Tren Chepe Express y qué rutas cubre?",
    Icon: FiDollarSign,
    imgSrc:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    description:
      "El Chepe Express es el tren turístico que recorre la ruta entre Los Mochis y Creel, pasando por Barrancas del Cobre. Ofrece diferentes clases y paradas con vistas espectaculares durante el trayecto.",
  },
  {
    id: 2,
    title: "¿Qué servicios incluye el tour a Barrancas?",
    Icon: GiMountains,
    imgSrc:
      "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    description:
      "El tour incluye boletos del Chepe Express, traslados, hospedaje, algunos alimentos, guías expertos y actividades como visitas a comunidades locales, valles, cascadas y caminatas guiadas por la región.",
  },
  {
    id: 3,
    title: "¿Qué hoteles incluye el tour Barrancas?",
    Icon: FaPlaneArrival,
    imgSrc:
      "https://images.unsplash.com/photo-1578450671530-5b6a7c9f32a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    description:
      "Los tours incluyen hoteles como El Mirador, Hotel Divisadero, Posada Barrancas, The Lodge at Creel y Quinta Misión. La selección puede variar según el paquete elegido.",
  },
  {
    id: 4,
    title: "¿Qué actividades ofrece Parque Barrancas?",
    Icon: AiOutlineQuestion,
    imgSrc:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    description:
      "El parque ofrece ZipRider, circuito de siete tirolesas, bosque aéreo con puentes colgantes, vía ferrata, teleférico panorámico y el Restaurante Barranco, famoso por su vista y piso de cristal.",
  },
  {
    id: 5,
    title: "¿Cuál es la mejor época para visitar?",
    Icon: AiOutlineQuestion,
    imgSrc:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    description:
      "La mejor época es de octubre a abril por su clima fresco. De diciembre a febrero puede nevar, creando paisajes únicos. En verano, especialmente julio y agosto, la zona luce verde por las lluvias.",
  },
];

