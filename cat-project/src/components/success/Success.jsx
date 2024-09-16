import React from 'react';
import Logo from '../../assets/Logo.png';
import CatCoffe from '../../assets/Cat.png';
import '../../App.css'
import { useNavigate } from 'react-router-dom';

export default function Success() {
  const history = useNavigate();
  return (
    <div style={{ backgroundColor: '#ffeada' }} className='d-flex flex-column gap-5 justify-content-center align-items-center w-100 min-vh-100'>
      <img
        src={Logo}
        alt="Logo de café"
        className="img-fluid"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <img
        src={CatCoffe}
        alt="CatCoffe"
        className="img-fluid"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <h1 className='text-color'>Reserva concluída <br /> com sucesso !</h1>

      <button
  type="submit"
  className="btn btn-lg mt-4 rounded-5 w-50 w-md-25"
  style={{ backgroundColor: '#ff8a00', color: 'black' }}
  onClick={() => {
    history('/')
  }}
>
  Voltar para página inicial
</button>

    </div>
  );
}
