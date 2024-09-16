import React from 'react';
import CatCoffe from '../../assets/Confirmação.png';

export default function Success() {
  return (
    <div style={{ backgroundColor: '#ffeada' }} className='d-flex justify-content-center align-items-center w-100 min-vh-100'>
      <img
        src={CatCoffe}
        alt="Logo de café"
        className="img-fluid"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
}
