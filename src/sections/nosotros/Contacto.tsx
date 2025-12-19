'use client';

import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

interface FormData {
  nombre: string;
  apellido: string;
  pais: string;
  telefono: string;
  email: string;
  fecha: string;
  comentarios: string;
}

function Contacto() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    apellido: '',
    pais: 'México (+52)',
    telefono: '',
    email: '',
    fecha: '',
    comentarios: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handleDateSelect = (day: number) => {
    // Create date at midnight in local time
    const selectedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day, 0, 0, 0);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Prevent selecting dates before today
    if (selectedDate < today) return;
    
    // Format date without timezone conversion issues (YYYY-MM-DD)
    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
    const dateStr = String(selectedDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${dateStr}`;
    
    setFormData(prev => ({
      ...prev,
      fecha: formattedDate
    }));
    setShowDatePicker(false);
  };

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const dayNames = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'];

  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDay }, () => null);
  const allDays = [...emptyDays, ...days];

  const selectedDate = formData.fecha ? new Date(formData.fecha) : null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };


  return (
    <section className='panel relative snap-start w-full h-dvh flex items-center justify-center px-4 md:px-6 lg:px-8 overflow-hidden'>
      {/* Background Image Overlay */}
      <div className='absolute inset-0 z-0'>
        <div className='absolute inset-0 bg-gradient-to-r from-gray-300/80 via-gray-200/60 to-gray-50/20 z-10'></div>
        <div className='w-full h-full bg-cover bg-center' style={{backgroundImage: 'url(/api/placeholder/1920/1080)'}}></div>
      </div>

      {/* Form Container */}
      <div className='relative z-20 w-full max-w-2xl max-h-dvh overflow-y-auto'>
        <form onSubmit={handleSubmit} className='bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-4 md:p-8 lg:p-10 shadow-2xl'>
          
          {/* Personal Data Section */}
          <div className='mb-6 md:mb-8'>
            <h3 className='text-lg md:text-xl font-semibold text-white mb-4 pb-2 border-b border-primary-600/50'>
              Datos personales
            </h3>

            {/* Name and Last Name Row */}
            <div className='grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-4 mb-3'>
              <input
                type='text'
                name='nombre'
                placeholder='Tu nombre'
                value={formData.nombre}
                onChange={handleInputChange}
                className='text-white w-full px-4 py-2.5 md:py-3 relative cursor-pointer rounded-2xl bg-white/25 dark:bg-black/25 border border-white/40 dark:border-white/20 backdrop-blur-2xl shadow-[inset_0_1px_0px_rgba(255,255,255,0.9),0_8px_32px_rgba(0,0,0,0.15)] dark:shadow-[inset_0_1px_0px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.5)] hover:bg-white/35 dark:hover:bg-black/35 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-linear-to-br before:from-white/50 dark:before:from-white/10 before:via-transparent before:to-transparent before:opacity-100 dark:before:opacity-50 before:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:bg-linear-to-tl after:from-white/30 dark:after:from-white/10 after:via-transparent after:to-transparent after:opacity-70 dark:after:opacity-40 after:pointer-events-none antialiased h-full flex flex-col transition-all duration-300 text-sm'
              />
              <input
                type='text'
                name='apellido'
                placeholder='Tu apellido'
                value={formData.apellido}
                onChange={handleInputChange}
                className='text-white w-full px-4 py-2.5 md:py-3 relative cursor-pointer rounded-2xl bg-white/25 dark:bg-black/25 border border-white/40 dark:border-white/20 backdrop-blur-2xl shadow-[inset_0_1px_0px_rgba(255,255,255,0.9),0_8px_32px_rgba(0,0,0,0.15)] dark:shadow-[inset_0_1px_0px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.5)] hover:bg-white/35 dark:hover:bg-black/35 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-linear-to-br before:from-white/50 dark:before:from-white/10 before:via-transparent before:to-transparent before:opacity-100 dark:before:opacity-50 before:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:bg-linear-to-tl after:from-white/30 dark:after:from-white/10 after:via-transparent after:to-transparent after:opacity-70 dark:after:opacity-40 after:pointer-events-none antialiased h-full flex flex-col transition-all duration-300 text-sm'
              />
            </div>

            {/* Country and Phone Row */}
            <div className='grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-4 mb-3'>
              <select
                name='pais'
                value={formData.pais}
                onChange={handleInputChange}
                className='text-white w-full px-4 py-2.5 md:py-3 relative cursor-pointer rounded-2xl bg-white/25 dark:bg-black/25 border border-white/40 dark:border-white/20 backdrop-blur-2xl shadow-[inset_0_1px_0px_rgba(255,255,255,0.9),0_8px_32px_rgba(0,0,0,0.15)] dark:shadow-[inset_0_1px_0px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.5)] hover:bg-white/35 dark:hover:bg-black/35 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-linear-to-br before:from-white/50 dark:before:from-white/10 before:via-transparent before:to-transparent before:opacity-100 dark:before:opacity-50 before:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:bg-linear-to-tl after:from-white/30 dark:after:from-white/10 after:via-transparent after:to-transparent after:opacity-70 dark:after:opacity-40 after:pointer-events-none antialiased h-full flex flex-col text-sm'
              >
                <option style={{ color: 'black' }}>México (+52)</option>
                <option style={{ color: 'black' }}>Estados Unidos (+1)</option>
                <option style={{ color: 'black' }}>Canadá (+1)</option>
                <option style={{ color: 'black' }}>España (+34)</option>
                <option style={{ color: 'black' }}>Otro</option>
              </select>
              <div className='relative'>
                <input
                  type='tel'
                  name='telefono'
                  placeholder='Número de teléfono'
                  value={formData.telefono}
                  onChange={handleInputChange}
                  className='text-white w-full px-4 py-2.5 md:py-3 relative cursor-pointer rounded-2xl bg-white/25 dark:bg-black/25 border border-white/40 dark:border-white/20 backdrop-blur-2xl shadow-[inset_0_1px_0px_rgba(255,255,255,0.9),0_8px_32px_rgba(0,0,0,0.15)] dark:shadow-[inset_0_1px_0px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.5)] hover:bg-white/35 dark:hover:bg-black/35 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-linear-to-br before:from-white/50 dark:before:from-white/10 before:via-transparent before:to-transparent before:opacity-100 dark:before:opacity-50 before:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:bg-linear-to-tl after:from-white/30 dark:after:from-white/10 after:via-transparent after:to-transparent after:opacity-70 dark:after:opacity-40 after:pointer-events-none antialiased h-full flex flex-col text-sm'
                />
                
              </div>
              <p className='text-xs text-white mt-0.5 px-0'>Completo - 502-2 dígitos (mín. 10, máx. 13)</p>
            </div>

            {/* Email */}
            <div>
              <input
                type='email'
                name='email'
                placeholder='correo@ejemplo.com'
                value={formData.email}
                onChange={handleInputChange}
                className='text-white w-full px-4 py-2.5 md:py-3 relative cursor-pointer rounded-2xl bg-white/25 dark:bg-black/25 border border-white/40 dark:border-white/20 backdrop-blur-2xl shadow-[inset_0_1px_0px_rgba(255,255,255,0.9),0_8px_32px_rgba(0,0,0,0.15)] dark:shadow-[inset_0_1px_0px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.5)] hover:bg-white/35 dark:hover:bg-black/35 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-linear-to-br before:from-white/50 dark:before:from-white/10 before:via-transparent before:to-transparent before:opacity-100 dark:before:opacity-50 before:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:bg-linear-to-tl after:from-white/30 dark:after:from-white/10 after:via-transparent after:to-transparent after:opacity-70 dark:after:opacity-40 after:pointer-events-none antialiased h-full flex flex-col text-sm'
              />
            </div>
          </div>

          {/* Trip Details Section */}
          <div className='mb-6 md:mb-8'>
            <h3 className='text-lg md:text-xl font-semibold text-white mb-4 pb-2 border-b border-primary-600/50'>
              Sobre tu viaje
            </h3>

            {/* Travel Date */}
            <div className='mb-3 relative'>
              <label className='text-xs md:text-sm text-white block mb-2'>
                Fecha aproximada de viaje
              </label>
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Selecciona una fecha'
                  value={formData.fecha ? (() => {
                    const [year, month, day] = formData.fecha.split('-');
                    return `${day}/${month}/${year}`;
                  })() : ''}
                  readOnly
                  onClick={() => setShowDatePicker(!showDatePicker)}
                  className='text-white w-full px-4 py-2.5 md:py-3 relative cursor-pointer rounded-2xl bg-white/25 dark:bg-black/25 border border-white/40 dark:border-white/20 backdrop-blur-2xl shadow-[inset_0_1px_0px_rgba(255,255,255,0.9),0_8px_32px_rgba(0,0,0,0.15)] dark:shadow-[inset_0_1px_0px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.5)] hover:bg-white/35 dark:hover:bg-black/35 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-linear-to-br before:from-white/50 dark:before:from-white/10 before:via-transparent before:to-transparent before:opacity-100 dark:before:opacity-50 before:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:bg-linear-to-tl after:from-white/30 dark:after:from-white/10 after:via-transparent after:to-transparent after:opacity-70 dark:after:opacity-40 after:pointer-events-none antialiased h-full flex flex-col text-sm'
                />
              </div>

              {/* Date Picker Modal */}
              {showDatePicker && (
                <div className='absolute top-full mt-2 left-0 right-0 relative cursor-pointer rounded-2xl bg-white/15 dark:bg-black/25 border border-white/40 dark:border-white/20 backdrop-blur-2xl shadow-[inset_0_1px_0px_rgba(255,255,255,0.9),0_8px_32px_rgba(0,0,0,0.15)] dark:shadow-[inset_0_1px_0px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.5)] hover:bg-white/35 dark:hover:bg-black/35 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-linear-to-br before:from-white/50 dark:before:from-white/10 before:via-transparent before:to-transparent before:opacity-100 dark:before:opacity-50 before:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:bg-linear-to-tl after:from-white/30 dark:after:from-white/10 after:via-transparent after:to-transparent after:opacity-70 dark:after:opacity-40 after:pointer-events-none antialiased h-full flex flex-col p-4 shadow-2xl z-50'>
                  {/* Month/Year Header */}
                  <div className='flex items-center justify-between mb-4'>
                    <button
                      type='button'
                      onClick={handlePrevMonth}
                      className='p-1 hover:bg-gray-800/40 pointed transition-colors'
                    >
                      <FaChevronLeft className='text-black text-sm' />
                    </button>
                    <h4 className='text-white font-semibold text-center flex-1'>
                      {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                    </h4>
                    <button
                      type='button'
                      onClick={handleNextMonth}
                      className='p-1 hover:bg-gray-800/40 rounded transition-colors'
                    >
                      <FaChevronRight className='text-black text-sm' />
                    </button>
                  </div>

                  {/* Day Names */}
                  <div className='grid grid-cols-7 gap-1 mb-2'>
                    {dayNames.map((day) => (
                      <div key={day} className='text-center text-xs text-black font-semibold py-2'>
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Calendar Days */}
                  <div className='grid grid-cols-7 gap-1'>
                    {allDays.map((day, idx) => {
                      // Check if date is disabled (before today)
                      const checkDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day, 0, 0, 0);
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);
                      const isDisabled = day && checkDate < today;
                      
                      // Check if date is selected
                      let isSelected = false;
                      if (day && formData.fecha) {
                        const [selectedYear, selectedMonth, selectedDay] = formData.fecha.split('-').map(Number);
                        isSelected = day === selectedDay && 
                                    currentMonth.getMonth() === selectedMonth - 1 && 
                                    currentMonth.getFullYear() === selectedYear;
                      }
                      
                      return (
                        <button
                          key={idx}
                          type='button'
                          onClick={() => day && !isDisabled && handleDateSelect(day)}
                          disabled={!day || isDisabled}
                          className={`
                            p-2 text-sm rounded transition-colors text-center
                            ${!day ? 'bg-transparent' : ''}
                            ${isDisabled ? 'text-slate-500 cursor-not-allowed opacity-50' : ''}
                            ${isSelected && !isDisabled
                              ? 'bg-primary-600 text-white font-bold'
                              : !isDisabled && day
                              ? 'text-slate-300 hover:bg-gray-800/40'
                              : ''
                            }
                          `}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>

                  {/* Close button */}
                  <button
                    type='button'
                    onClick={() => setShowDatePicker(false)}
                    className='w-full mt-3 px-3 py-1.5 bg-black hover:bg-black/80 text-white text-xs rounded-full transition-colors'
                  >
                    Cerrar
                  </button>
                </div>
              )}
            </div>

            {/* Additional Comments */}
            <div>
              <label className='text-xs md:text-sm text-white block mb-2'>
                Comentarios adicionales (opcional)
              </label>
              <textarea
                name='comentarios'
                placeholder='Escribe cualquier comentario...'
                value={formData.comentarios}
                onChange={handleInputChange}
                rows={3}
                className='w-full px-4 py-2.5 md:py-3 text-white relative cursor-pointer rounded-2xl bg-white/25 dark:bg-black/25 border border-white/40 dark:border-white/20 backdrop-blur-2xl shadow-[inset_0_1px_0px_rgba(255,255,255,0.9),0_8px_32px_rgba(0,0,0,0.15)] dark:shadow-[inset_0_1px_0px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.5)] hover:bg-white/35 dark:hover:bg-black/35 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-linear-to-br before:from-white/50 dark:before:from-white/10 before:via-transparent before:to-transparent before:opacity-100 dark:before:opacity-50 before:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:bg-linear-to-tl after:from-white/30 dark:after:from-white/10 after:via-transparent after:to-transparent after:opacity-70 dark:after:opacity-40 after:pointer-events-none antialiased h-full flex flex-col resize-none text-sm'
              />
            </div>
          </div>

          {/* reCAPTCHA and Submit */}
          <div className='space-y-4'>
            {/* reCAPTCHA Placeholder */}
            <div className='flex items-center justify-center bg-white px-3 py-2 rounded-lg w-fit mx-auto text-sm'>
              <input type='checkbox' id='recaptcha' className='mr-2' />
              <label htmlFor='recaptcha' className='text-slate-700 text-xs md:text-sm'>
                Soy un humano
              </label>
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              disabled={isLoading}
              className='w-full bg-gradient-to-r from-primary-600 to-primary-800 hover:from-primary-700 hover:to-primary-900 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-2.5 md:py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-center uppercase tracking-wide text-sm'
            >
              {isLoading ? 'Enviando...' : 'Enviar'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contacto;
