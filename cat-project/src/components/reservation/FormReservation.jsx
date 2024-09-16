import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import 'bootstrap/dist/css/bootstrap.min.css';

const schema = z.object({
  name: z.string().min(1, 'Campo obrigatório'),
  cellnumber: z
    .string()
    .regex(/^\d{10,11}$/, 'Número de WhatsApp inválido (deve ter entre 10 e 11 dígitos, sem espaços ou símbolos)'),
  email: z.string().email('Email inválido'),
  table: z.preprocess((value) => Number(value), z.number().min(1, 'Deve ter pelo menos 1 pessoa').max(12, 'Máximo de 12 pessoas')),
  visitDate: z.string().refine((value) => {
    const today = new Date().setHours(0, 0, 0, 0);
    const selectedDate = new Date(value).setHours(0, 0, 0, 0);
    return selectedDate >= today;
  }, 'A data de visita não pode ser menor que o dia atual'),
  visitTime: z.string().min(1, 'Por favor, selecione um horário'),
});

export default function FormReservation() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const [availableTimes, setAvailableTimes] = useState([]);
  const visitDate = watch('visitDate');

  useEffect(() => {
    const today = new Date();
    const selectedDate = new Date(visitDate);

    const allSlots = [
      { value: '09:00-10:00', label: '09:00 - 10:00' },
      { value: '10:00-11:00', label: '10:00 - 11:00' },
      { value: '11:00-12:00', label: '11:00 - 12:00' },
      { value: '12:00-13:00', label: '12:00 - 13:00' },
      { value: '13:00-14:00', label: '13:00 - 14:00' },
      { value: '14:00-15:00', label: '14:00 - 15:00' },
      { value: '15:00-16:00', label: '15:00 - 16:00' },
    ];

    if (visitDate) {
      if (selectedDate.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0)) {
        const currentHour = today.getHours();
        const filteredSlots = allSlots.filter(slot => parseInt(slot.value.split(':')[0]) > currentHour);
        setAvailableTimes(filteredSlots);
      } else {
        setAvailableTimes(allSlots);
      }
    }
  }, [visitDate]);

  const onSubmit = (data) => {
    alert('Reserva realizada com sucesso!');
    console.log('Dados enviados:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-100">

      {/* Nome */}
      <div className="row">
        <div className="mb-3 col-12 col-md-6">
          <label htmlFor="name" className="form-label">Como podemos te chamar?</label>
          <input
            type="text"
            className={`form-control rounded-5 ${errors.name ? 'is-invalid' : ''}`}
            style={{ borderColor: '#41200d', background: '#ffeada' }}
            {...register('name')}
            placeholder="Pedro Goulart"
          />
          {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
        </div>
      </div>

      {/* Whatsapp */}
      <div className="row">
        <div className="mb-3 col-12 col-md-6">
          <label htmlFor="cellnumber" className="form-label">Qual o seu whatsapp?</label>
          <input
            type="tel"
            className={`form-control rounded-5 ${errors.cellnumber ? 'is-invalid' : ''}`}
            style={{ borderColor: '#41200d', background: '#ffeada' }}
            {...register('cellnumber')}
            placeholder="18998033015"
          />
          {errors.cellnumber && <div className="invalid-feedback">{errors.cellnumber.message}</div>}
        </div>
      </div>

      {/* Email */}
      <div className="row">
        <div className="mb-3 col-12 col-md-6">
          <label htmlFor="email" className="form-label">Qual o seu email?</label>
          <input
            type="email"
            className={`form-control rounded-5 ${errors.email ? 'is-invalid' : ''}`}
            style={{ borderColor: '#41200d', background: '#ffeada' }}
            {...register('email')}
            placeholder="email@gmail.com"
          />
          {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
        </div>
      </div>

      {/* Mesa */}
      <div className="mb-3 d-flex d-md-block flex-md-row align-items-md-start flex-column align-items-center">
        <label htmlFor="table" className="form-label">Mesa para quantas pessoas?</label>
        <input
          type="number"
          className={`form-control rounded-5 w-25 ${errors.table ? 'is-invalid' : ''}`}
          style={{ borderColor: '#41200d', background: '#ffeada' }}
          {...register('table')}
          placeholder="1"
        />
        {errors.table && <div className="invalid-feedback">{errors.table.message}</div>}
      </div>

      {/* Input de data */}
      <div className="mb-3 d-flex d-md-block flex-md-row align-items-md-start flex-column align-items-center">
        <label htmlFor="visitDate" className="form-label">Quando vem nos visitar?</label>
        <input
          type="date"
          className={`form-control rounded-5 w-25 ${errors.visitDate ? 'is-invalid' : ''}`}
          style={{ borderColor: '#41200d', background: '#ffeada' }}
          {...register('visitDate')}
        />
        {errors.visitDate && <div className="invalid-feedback">{errors.visitDate.message}</div>}
      </div>

      {/* Input de Horário */}
      <div className="mb-3 d-flex d-md-block flex-md-row align-items-md-start flex-column align-items-center">
        <label htmlFor="visitTime" className="form-label">Que horas você vai chegar?</label>
        <select
          className={`form-control rounded-5 w-25 ${errors.visitTime ? 'is-invalid' : ''}`}
          style={{ borderColor: '#41200d', background: '#ffeada' }}
          {...register('visitTime')}
        >
          <option value="">Selecione um horário</option>
          {availableTimes.map((slot) => (
            <option key={slot.value} value={slot.value}>{slot.label}</option>
          ))}
        </select>
        {errors.visitTime && <div className="invalid-feedback">{errors.visitTime.message}</div>}
      </div>

      {/* Botão de envio */}
      <div className="d-flex d-md-none flex-column align-items-center">
        <button
          type="submit"
          className="btn btn-lg mt-4 rounded-5 w-75"
          style={{ backgroundColor: '#ff8a00', color: 'black' }}
        >
          Reservar
        </button>
      </div>

      <div className="d-none d-md-block">
        <button
          type="submit"
          className="btn btn-lg mt-4 rounded-5 w-50"
          style={{ backgroundColor: '#ff8a00', color: 'black' }}
        >
          Reservar
        </button>
      </div>
    </form>
  );
}
