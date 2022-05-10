import React from 'react';
import './styles.scss';
import 'bulma/css/bulma.min.css';

import Footer from '../Footer'

import logo from './logo.svg';
import maskGroup from './MaskGroup.svg';
import Schedule from './Schedule.svg';
import Medal from './Medal.svg';
import Wallet from './Wallet.svg';
import Marker from './Marker.svg'



const Home = () => (
    <div>
        {/* Logo */}
        <section className="hero is-black is-fullheight">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <img src={logo} alt='BlackMezas blackmezas coworking'/>
                    <p className="slogan">
                        Premium Coworking Environments
                    </p>
                </div>
            </div>
        </section>

        {/* Roadmap */}
        <section className="hero is-white is-fullheight">
            <div className="hero-body">
                <div className="">
                    <p className="title">
                        Fullheight hero
                    </p>
                    <p className="subtitle">
                        Fullheight subtitle
                    </p>
                </div>
            </div>
        </section>

        {/* Perspectiva continental */}
        <section className="hero is-image is-fullheight">
            <div className="hero-head">
                <p className="title perspCon">
                    Una perspectiva continental
                </p>
            </div>
            <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="columns perspCon">
                        <div className="column persCon">
                            <div className='blur-layer'>
                                <div className='maskgroup'>
                                    <img src={maskGroup} alt=''/>
                                </div>
                                <div className='persCon-aligment'>
                                    <p>
                                        Destructuración del trabajo al alza.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="column persCon">
                            <div className='blur-layer'>
                                <div className='maskgroup'>
                                    <img src={maskGroup} alt=''/>
                                </div>
                                <div className='persCon-aligment'>
                                    <p>
                                        Estudios reflejan que la productividad en home-office ha caido más de 40%.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="column persCon">
                            <div className='blur-layer'>
                                <div className='maskgroup'>
                                    <img src={maskGroup} alt=''/>
                                </div>
                                <div className='persCon-aligment'>
                                    <p>
                                        Las empresas han aprendido a ahorrar como consecuencias del COVID-19 y van a asegurarse que este ahorro siga.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* La formula correcta */}
        <section className="hero is-black is-fullheight">
            <div className="hero-body formCorrMobile">
                <div className="container">
                    <p className="title formcorr">
                        La fórmula correcta
                    </p>
                </div>
                <div className="container">
                    <div className="columns formCorrTop">
                        <div className="column">
                            <div className='formCorrCon'>
                                <p className='formCorrNum'>01</p>
                                <p className='formCorrTit'>Costo</p>
                            </div>
                            <p className='formCorrDesc'>
                                Pagas lo que consumes en espacio y tiempo.
                            </p>
                        </div>
                        <div className="column">
                            <div className='formCorrCon'>
                                <p className='formCorrNum'>02</p>
                                <p className='formCorrTit'>Flexibilidad</p>
                            </div>
                            <p className='formCorrDesc'>
                                Contratos a la medida de tus necesidades.
                            </p>
                        </div>
                    </div>
                    <div className="columns formCorrBottom">
                        <div className="column">
                            <div className='formCorrCon'>
                                <p className='formCorrNum'>03</p>
                                <p className='formCorrTit'>Amenities</p>
                            </div>
                            <p className='formCorrDesc'>
                                Amenidades hoteleras que te generan valor.
                            </p>
                        </div>
                        <div className="column">
                            <div className='formCorrCon'>
                                <p className='formCorrNum'>04</p>
                                <p className='formCorrTit'>Comunidad</p>
                            </div>
                            <p className='formCorrDesc'>
                                Forma parte de un selecto club con beneficios considerables.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Propuesta de valor */}
        <section className="hero is-white is-fullheight">
            <div className="hero-head">
                <p className="title pvalor">
                    Propuesta de valor
                </p>
            </div>
            <div className="hero-body pvalor">
                <div className="columns pvalor top">
                    <div className="column pvalor">
                        <div className='pvalorItems'>
                            <img src={Schedule} alt=''/>
                            <p className='pvalorTit'>Flexibilidad</p>
                            <p className='pvalorDesc'>
                                Puedes rentar por la cantidad de tiempo que desees. ¿Un mes? ¿Tres años? No hay problema.
                            </p>
                        </div>
                    </div>
                    <div className="column pvalor">
                        <div className='pvalorItems'>
                            <img src={Medal} alt='' className='imgMedal'/>
                            <p className='pvalorTit'>Exclusividad</p>
                            <p className='pvalorDesc'>
                                Tendremos las mejores instalaciones y nuestros clientes serán parte de un selecto club, lleno de beneficios.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="columns pvalor">
                    <div className="column pvalor">
                        <div className='pvalorItems'>
                            <img src={Wallet} alt=''/>
                            <p className='pvalorTit'>Value for money</p>
                            <p className='pvalorDesc'>
                                En BlackMezas todo está incluido; desde café hasta horas estipuladas de reunión.
                            </p>
                        </div>
                    </div>
                    <div className="column pvalor">
                        <div className='pvalorItems'>
                            <img src={Marker} alt='' className='imgMarker'/>
                            <p className='pvalorTit'>Ubicación</p>
                            <p className='pvalorDesc'>
                                BlackMezas estará disponible en los mejores hoteles de la región.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        {/* Footer */}
        <Footer />
    </div>
)


export default(Home);