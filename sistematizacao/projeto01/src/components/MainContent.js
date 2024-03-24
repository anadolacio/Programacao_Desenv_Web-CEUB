import React from 'react';
import mainimg from '../images/main-img.png'
import { Card } from 'primereact/card';
import '../App.css'
import lee from '../images/lee.jpeg'
import franca from '../images/franca.jpeg'
import melo from '../images/melo.png'
import { Calendar } from 'primereact/calendar';
import { useState } from 'react';
import 'primeicons/primeicons.css';

export default function MainContent() {
    const [date, setDate] = useState(null);
    return (
        <header>
            <div className='main-content' >

                <div  >
                    <img src={mainimg} className='main-img' />

                    <h2 className='text-content'>A Clinica CEUB tem mais de 20 anos de excelência na área. <br></br>
                        Atuando sempre de forma idônea e eficaz, proporcionando o melhor para seus pacientes.</h2>
                </div>

                <div className='cards-content'>
                    <div>
                        <Card title="Endocrinologia" subTitle="Dra. Fabiana Lee" className="card-1">
                            <img src={lee} className='dr-img' />
                            <p >
                                Especialista em emagrecimento.
                            </p>
                            <h4><i className="pi pi-calendar"></i>Marque sua consulta:</h4>
                            <Calendar className='calendar' value={date} onChange={(e) => setDate(e.value)} />
                        </Card>
                    </div>

                    <div>
                        <Card title="Cardiologia" subTitle="Dr. Marcelo Melo" className="card-1">
                            <img src={melo} className='dr-img' />
                            <p >
                                Especialista em cirurgia vascular.
                            </p>
                            <h4><i className="pi pi-calendar"></i>Marque sua consulta:</h4>
                            <Calendar className='calendar' value={date} onChange={(e) => setDate(e.value)} />
                        </Card>

                    </div>

                    <div>
                        <Card title="Dermatologia" subTitle="Dra. Lais França" className="card-1">
                            <img src={franca} className='dr-img' />
                            <p >
                                Especialista em pele acneica.
                            </p>
                            <h4><i className="pi pi-calendar"></i>Marque sua consulta:</h4>
                            <Calendar value={date} onChange={(e) => setDate(e.value)} />
                        </Card>

                    </div>



                </div>


            </div>
        </header>
    );
}