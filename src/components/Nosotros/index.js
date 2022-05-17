import React from 'react';
import './styles.scss';
import 'bulma/css/bulma.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Diploma from './Diploma.png';
import Marker from './Marker.png';

import Footer from '../Footer'


const Nosotros = () => (
    <>
        {/* Acerca de nosotros */}
        <section className="hero is-black is-fullheight">

        </section>

        {/* Por que BlackMezas */}
        <section className="hero is-primary is-fullheight">
            
        </section>

        {/* Nuestras instalaciones */}
        <section className="hero is-white is-fullheight">
            
        </section>

        {/* Que aportamos */}
        <section className="hero is-black is-fullheight">
            <div className="hero-head qaportamos">
                <div className='sectionTitle'>
                    <p className='nosotros qaportamos'>Nosotros</p>
                    <div className='line'></div>
                </div>
                <p className='qAportamos qaportamos'>¿Qué aportamos?</p>
            </div>
            <div className="hero-body">
                <div className='container has-text-centered'>
                    <div className='columns qaportamos'>
                        <div className='column qaportamos'>
                            <div className='contQaportamos'>
                                <img src={Diploma} alt='' className='iconQaportamos' />
                                <p className='qaportamosTitle'>Experiencia</p>
                                <p className='qaportamosDesc'>
                                    Tenemos más de 60 años de experiencia combinada en desarrollos inmobiliarios 
                                    residenciales y comerciales, así como productos y servicios relacionados.
                                </p>
                            </div>
                        </div>
                        <div className='column qaportamos'>
                            <div className='contQaportamos'>
                                <img src={Marker} alt='' className='iconQaportamos' />
                                <p className='qaportamosTitle'>Referencia</p>
                                <p className='qaportamosDesc'>
                                    BlackMezas® posee experiencia en varios países de LATAM, 
                                    de Europa y en Estados Unidos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Galeria de fotos */}
        <section className="hero is-white is-fullheight">
            
        </section>

        {/* Contactanos */}
        <section className="hero is-black is-fullheight">
            {/* <div className='footerCon'>
                <Footer/>
            </div> */}
        </section>

    </>

)

export default(Nosotros);