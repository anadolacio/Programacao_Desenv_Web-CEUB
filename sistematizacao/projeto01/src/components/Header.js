import React from 'react';
import logo from '../images/logo.png'
import { Dropdown } from 'primereact/dropdown';
import { useState } from 'react';
import '../App.css'

export default function Header() {

  const [selectedCity, setSelectedCity] = useState(null);

  const cities = [
    { name: 'Brasília' },
    { name: 'Goiânia' },
    { name: 'Cuiabá' },
    { name: 'Campo Grande' },
  ];

  return (
    <header>
      <div className='header' >

        <img src={logo} className='img-logo' />

        <h1 className='title'>Clínica CEUB</h1>
        <div>
          <h3 className='h3-title'>Seja bem vindo!</h3>

          <Dropdown className='selectCidade' value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
            placeholder="Selecione sua localidade" />

        </div>

      </div>
    </header>
  );
}


