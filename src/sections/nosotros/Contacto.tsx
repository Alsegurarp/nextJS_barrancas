'use client';

import React, { useState, lazy } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';
import axios from 'axios';

// comentado hasta tener el recaptcha key declarada
// const ReCAPTCHA = lazy(() => import('react-google-recaptcha'));

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
  const router = useRouter();

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
  const [validCaptcha, setValidCaptcha] = useState<string | null>(null);
  const [serverMsg, setServerMsg] = useState<string | null>(null);
  const [serverErr, setServerErr] = useState<string | null>(null);

  // Regex validators
  const cleanName = (v: string) => v
    .normalize('NFC')
    .replace(/[^\p{L}\s]/gu, '')
    .replace(/\s{2,}/g, ' ')
    .trimStart();

  const cleanEmail = (v: string) => v.toLowerCase().slice(0, 50);

  const cleanPhone = (v: string) => {
    let s = v.replace(/[^\d]/g, '');
    const maxDigits = 13;
    return s.slice(0, maxDigits);
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  // Validators
  const isNombreValid = formData.nombre.trim().length > 0;
  const isApellidoValid = formData.apellido.trim().length > 0;
  const isEmailValid = emailRegex.test(formData.email);
  const isTelefonoValid = formData.telefono.length >= 10 && formData.telefono.length <= 13;

  const isFormValid = isNombreValid && isApellidoValid && isEmailValid && isTelefonoValid && validCaptcha;

  // recaptcha key de testing, cuando está declarada, se elige la otra
  const reCaptchaKey = 'pepe';
  // const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    let cleanedValue = value;
    if (name === 'nombre' || name === 'apellido') {
      cleanedValue = cleanName(value);
    } else if (name === 'email') {
      cleanedValue = cleanEmail(value);
    } else if (name === 'telefono') {
      cleanedValue = cleanPhone(value);
    }

    setFormData(prev => ({
      ...prev,
      [name]: cleanedValue
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
    setServerMsg(null);
    setServerErr(null);

    const payload = {
      nombre: formData.nombre.trim(),
      apellido: formData.apellido.trim(),
      email: formData.email.trim(),
      pais: formData.pais,
      telefono: formData.telefono,
      telefonoCompleto: `${formData.pais.split('(')[1]?.slice(0, -1) || ''}${formData.telefono}`,
      comentarios: (formData.comentarios || '').trim() || '-',
      fecha: formData.fecha ? new Date(formData.fecha).toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' }) : '-',
      recaptchaToken: validCaptcha,
    };

    try {
      if (!validCaptcha) throw new Error('Valida el reCAPTCHA antes de enviar.');
      if (!isFormValid) throw new Error('Verifica que todos los campos requeridos estén completos y correctos.');

      const to = 'contacto@japonpremium.com.mx';
      const cc = 'grupo-santa-f@add.nocrm.io, crm@viajespremium.com.mx';
      const subject = `Contacto - Barrancas Premium: ${payload.nombre} ${payload.apellido}`;
      
      const text = `
#tags:Barrancas Premium Nueva
Nuevo contacto desde formulario:
Nombre: ${payload.nombre} ${payload.apellido}
Email: ${payload.email}
Teléfono: ${payload.telefonoCompleto}
Región: ${payload.pais}
Fecha deseada: ${payload.fecha}
Comentarios: ${payload.comentarios}
      `.trim();

      const html = `
        #tags:Barrancas Premium Nueva
        <h2>Nuevo contacto desde formulario</h2>
        <p><strong>Nombre:</strong> ${payload.nombre} ${payload.apellido}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><strong>Teléfono:</strong> ${payload.telefonoCompleto}</p>
        <p><strong>Región:</strong> ${payload.pais}</p>
        <p><strong>Fecha deseada:</strong> ${payload.fecha}</p>
        <p><strong>Comentarios:</strong> ${payload.comentarios}</p>
      `;

      const resp = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE}/send-email`, {
        to,
        cc,
        subject,
        text,
        html,
      });

      if (resp.status === 200) {
        setServerMsg('¡Enviado con éxito! Te contactaremos pronto.');
        // Reset form
        setFormData({
          nombre: '',
          apellido: '',
          pais: 'México (+52)',
          telefono: '',
          email: '',
          fecha: '',
          comentarios: ''
        });
        setValidCaptcha(null);
        // Redirect after a short pause
        setTimeout(() => router.push('/gracias'), 500);
      } else {
        throw new Error(resp.data?.message || 'Error en la respuesta del servidor');
      }
    } catch (err: any) {
      console.error(err);
      setServerErr(err?.response?.data?.message || err?.message || 'Error al enviar el formulario.');
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <section className='panel relative snap-start w-full h-dvh flex items-center justify-center px-4 md:px-6 lg:px-8 py-12'>
      {/* Form Container */}
      <div className='w-full max-w-2xl'>
        <form onSubmit={handleSubmit} className='bg-white dark:bg-black/60 dark:backdrop-blur-xl rounded-lg p-6 md:p-10 shadow-sm'>
          
          {/* Personal Data Section */}
          <div className='mb-2'>
            <h3 className='text-lg md:text-xl font-semibold text-black dark:text-white mb-6 pb-0'>
              Datos personales
            </h3>

            {/* Name and Last Name Row */}
            <div className='grid grid-cols-2  md:grid-cols-2 gap-4 mb-4'>
              <div>
                <label htmlFor='nombre' className='text-xs text-gray-800 dark:text-gray-100 uppercase block mb-2 font-semibold'>Nombre</label>
                <input
                  required
                  id='nombre'
                  type='text'
                  name='nombre'
                  placeholder='Mario'
                  value={formData.nombre}
                  onChange={handleInputChange}
                  className='text-gray-900 dark:text-white w-full px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-primary-950/10 dark:backdrop-blur-xl border border-gray-200  dark:border-gray-600/60 focus:outline-none focus:bg-white focus:border-gray-300 transition-colors text-sm placeholder:text-gray-400 dark:placeholder:text-gray-300'
                />
              </div>
              <div>
                <label htmlFor='apellido' className='text-xs text-gray-800 dark:text-gray-100 uppercase block mb-2 font-semibold'>Apellido</label>
                <input
                  required
                  id='apellido'
                  type='text'
                  name='apellido'
                  placeholder='Segura'
                  value={formData.apellido}
                  onChange={handleInputChange}
                  className='text-gray-900 dark:text-white w-full px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-primary-950/10 dark:backdrop-blur-xl border border-gray-200 dark:border-gray-600/60 focus:outline-none focus:bg-white focus:border-gray-300 transition-colors text-sm placeholder:text-gray-400 dark:placeholder:text-gray-300'
                />
              </div>
            </div>

            {/* Country and Phone Row */}
            <div className='grid grid-cols-2 md:grid-cols-2 gap-4 mb-4'>
              <div>
                <label htmlFor='pais' className='text-xs text-gray-800 dark:text-gray-100 uppercase block mb-2 font-semibold'>Region</label>
                <select
                  id='pais'
                  name='pais'
                  value={formData.pais}
                  onChange={handleInputChange}
                  className='text-gray-900 dark:text-white w-full px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-primary-950/10 dark:backdrop-blur-xl border border-gray-200 dark:border-gray-600/60 focus:outline-none focus:bg-white focus:border-gray-300 transition-colors text-sm appearance-none cursor-pointer dark:placeholder:text-gray-300'
                >
                  <option>México (+52)</option>
                  <option>Estados Unidos (+1)</option>
                  <option>Canadá (+1)</option>
                  <option>España (+34)</option>
                  <option>Otro</option>
                </select>
              </div>
              <div>
                <label htmlFor='telefono' className='text-xs text-gray-800 dark:text-gray-100 uppercase block mb-2 font-semibold'>Celular</label>
                <input
                  required
                  id='telefono'
                  type='tel'
                  name='telefono'
                  placeholder='+52 1234567890'
                  value={formData.telefono}
                  onChange={handleInputChange}
                  className='text-gray-900 dark:text-white w-full px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-primary-950/10 dark:backdrop-blur-xl border border-gray-200 dark:border-gray-600/60 focus:outline-none focus:bg-white focus:border-gray-300 transition-colors text-sm placeholder:text-gray-400 dark:placeholder:text-gray-300'
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor='email' className='text-xs text-gray-800 dark:text-gray-100 uppercase block mb-2 font-semibold'>Email de contacto</label>
              <input
                required
                id='email'
                type='email'
                name='email'
                placeholder='correo@ejemplo.com'
                value={formData.email}
                onChange={handleInputChange}
                className='text-gray-900 dark:text-white w-full px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-primary-950/10 dark:backdrop-blur-xl border border-gray-200 dark:border-gray-600/60 focus:outline-none focus:bg-white focus:border-gray-300 transition-colors text-sm placeholder:text-gray-400 dark:placeholder:text-gray-300'
              />
            </div>
          </div>

          {/* Trip Details Section */}
          <div className='mb-2'>
            <h3 className='text-lg md:text-xl font-semibold text-gray-900  dark:text-white mb-1 pb-0'>
              Sobre tu viaje
            </h3>

            {/* Travel Date */}
            <div className='mb-4'>
              <label htmlFor='fecha' className='text-xs text-gray-800 dark:text-gray-100 uppercase block mb-2 font-semibold'>
                Fecha aproximada de viaje
              </label>
              <div className='relative'>
                <input
                  id='fecha'
                  type='text'
                  placeholder='Selecciona una fecha'
                  value={formData.fecha ? (() => {
                    const [year, month, day] = formData.fecha.split('-');
                    return `${day}/${month}/${year}`;
                  })() : ''}
                  readOnly
                  onClick={() => setShowDatePicker(!showDatePicker)}
                  className='text-gray-900 dark:text-white w-full px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-primary-950/10 dark:backdrop-blur-xl border border-gray-200 dark:border-gray-600/60 focus:outline-none focus:bg-white focus:border-gray-300 transition-colors text-sm cursor-pointer placeholder:text-gray-400 dark:placeholder:text-gray-300'
                />
              </div>

              {/* Date Picker Modal */}
              {showDatePicker && (
                <>
                  {/* Backdrop */}
                  <div 
                    className='fixed inset-0 bg-black/50 z-40'
                    onClick={() => setShowDatePicker(false)}
                  />
                  
                  {/* Modal */}
                  <div className='fixed inset-0 flex items-center justify-center z-50 px-4'>
                    <div className='bg-white dark:bg-black/60 dark:backdrop-blur-xl rounded-lg shadow-xl max-w-md w-full p-6'>
                      <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center'>
                        Selecciona tu fecha de viaje
                      </h2>
                      
                      {/* Month/Year Header */}
                      <div className='flex items-center justify-between mb-6'>
                        <button
                          type='button'
                          onClick={handlePrevMonth}
                          className='p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors'
                        >
                          <FaChevronLeft className='text-gray-900 dark:text-white text-lg' />
                        </button>
                        <h3 className='text-gray-900 dark:text-white font-semibold text-center flex-1 text-lg'>
                          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                        </h3>
                        <button
                          type='button'
                          onClick={handleNextMonth}
                          className='p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors'
                        >
                          <FaChevronRight className='text-gray-900 dark:text-white text-lg' />
                        </button>
                      </div>

                      {/* Day Names */}
                      <div className='grid grid-cols-7 gap-2 mb-4'>
                        {dayNames.map((day) => (
                          <div key={day} className='text-center text-xs text-gray-600 dark:text-gray-300 font-bold py-2'>
                            {day}
                          </div>
                        ))}
                      </div>

                      {/* Calendar Days */}
                      <div className='grid grid-cols-7 gap-2 mb-6'>
                        {allDays.map((day, idx) => {
                          // Check if date is disabled (before today)
                          const checkDate = day !== null ? new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day, 0, 0, 0) : null;
                          const today = new Date();
                          today.setHours(0, 0, 0, 0);
                          const isDisabled = !!(day && checkDate && checkDate < today);
                          
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
                                p-2 text-sm rounded-lg transition-all font-medium
                                ${!day ? 'bg-transparent' : ''}
                                ${isDisabled ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed opacity-40' : ''}
                                ${isSelected && !isDisabled
                                  ? 'bg-primary-700 text-white font-bold shadow-md'
                                  : !isDisabled && day
                                  ? 'text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800'
                                  : ''
                                }
                              `}
                            >
                              {day}
                            </button>
                          );
                        })}
                      </div>

                      {/* Action Buttons */}
                      <div className='flex gap-3'>
                        <button
                          type='button'
                          onClick={() => setShowDatePicker(false)}
                          className='flex-1 px-4 py-2.5 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white text-sm font-medium rounded-lg transition-colors'
                        >
                          Cancelar
                        </button>
                        <button
                          type='button'
                          onClick={() => setShowDatePicker(false)}
                          className='flex-1 px-4 py-2.5 bg-primary-700 hover:bg-primary-800 dark:hover:bg-primary-600 text-white text-sm font-medium rounded-lg transition-colors'
                        >
                          Confirmar
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Additional Comments */}
            <div>
              <label htmlFor='comentarios' className='text-xs text-gray-800 dark:text-gray-100 uppercase block mb-2 font-semibold'>
                Comentarios adicionales
              </label>
              <textarea
                id='comentarios'
                name='comentarios'
                placeholder='Escribe cualquier comentario...'
                value={formData.comentarios}
                onChange={handleInputChange}
                rows={3}
                className='w-full px-4 py-2.5 text-gray-900 dark:text-white rounded-lg bg-gray-100 dark:bg-primary-950/10 dark:backdrop-blur-xl border border-gray-200 dark:border-gray-600/60 focus:outline-none focus:bg-white focus:border-gray-300 transition-colors resize-none text-sm placeholder:text-gray-400 dark:placeholder:text-gray-300'
              />
            </div>
          </div>

          {/* reCAPTCHA and Submit */}
          <div className='space-y-4'>
            {/* reCAPTCHA - Cuando el key está declarado, y se manda a production, se deja de comentar
            <div className='flex items-center justify-start px-3 py-2 rounded-lg w-fit text-sm'>
              <React.Suspense fallback={<div>Cargando verificación...</div>}>
                <ReCAPTCHA
                  sitekey={reCaptchaKey}
                  onChange={(val: string | null) => setValidCaptcha(val)}
                  onExpired={() => setValidCaptcha(null)}
                  onError={() => setValidCaptcha(null)}
                />
              </React.Suspense>
            </div>
            */}

            {/* Submit Button */}
            <button
              type='submit'
              disabled={isLoading || !isFormValid}
              className='w-full bg-primary-700 hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-all duration-300 text-center uppercase tracking-wide text-sm'
            >
              {isLoading ? 'Enviando...' : 'Enviar'}
            </button>

            {serverMsg && <p className='text-green-600 dark:text-green-400 text-sm'>{serverMsg}</p>}
            {serverErr && <p className='text-red-600 dark:text-red-400 text-sm'>{serverErr}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contacto;