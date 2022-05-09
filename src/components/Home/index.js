import React from 'react';
import './styles.scss';
import 'bulma/css/bulma.min.css';

import logo from './logo.svg';
import maskGroup from './MaskGroup.svg';


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
                    <div className="columns">
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
            <div className="hero-body">
                <div className="container">
                    <p className="title">
                        La fórmula correcta
                    </p>
                </div>
                <div className="container">
                    <div className="columns perspCon">
                        <div className="column">
                            {/* <img src={maskGroup} /> */}
                            <p>
                                Destructuración del trabajo al alza.
                            </p>
                        </div>
                        <div className="column">2</div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            {/* <img src={maskGroup} /> */}
                            <p>
                                Destructuración del trabajo al alza.
                            </p>
                        </div>
                        <div className="column">2</div>
                    </div>
                </div>
            </div>
        </section>

        {/* Propuesta de valor */}
        <section className="hero is-white is-fullheight">
            <div className="hero-head">
                <p className="title">
                    Propuesta de valor
                </p>
            </div>
            <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="columns">
                        <div className="column">
                            {/* <img src={maskGroup} /> */}
                            <p>
                                Destructuración del trabajo al alza.
                            </p>
                        </div>
                        <div className="column">2</div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            {/* <img src={maskGroup} /> */}
                            <p>
                                Destructuración del trabajo al alza.
                            </p>
                        </div>
                        <div className="column">2</div>
                    </div>
                </div>
            </div>
        </section>

        {/* Footer */}
        <footer className="footer test">
            <div className="content has-text-centered">
                <p>
                    <strong>BlackMezas</strong> - © 2022 - All rights reserved
                </p>
            </div>
        </footer>
    </div>
)


export default(Home);