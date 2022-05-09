import React from 'react';
import './styles.scss';
import 'bulma/css/bulma.min.css';

import logo from './logo.svg';
import map from './map.png';
import maskGroup from './MaskGroup.svg';


const Home = () => (
    <div>
        {/* Logo */}
        <section class="hero is-black is-fullheight">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <img src={logo}/>
                    <p class="slogan">
                        Premium Coworking Environments
                    </p>
                </div>
            </div>
        </section>

        {/* Roadmap */}
        <section class="hero is-white is-fullheight">
            <div class="hero-body">
                <div class="">
                    <p class="title">
                        Fullheight hero
                    </p>
                    <p class="subtitle">
                        Fullheight subtitle
                    </p>
                </div>
            </div>
        </section>

        {/* Perspectiva continental */}
        <section class="hero is-black is-fullheight">
            <div class="hero-head">
                <p class="title">
                    Una perspectiva continental
                </p>
            </div>
            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="columns">
                        <div class="column">
                            {/* <img src={maskGroup} /> */}
                            <p>
                                Destructuración del trabajo al alza.
                            </p>
                        </div>
                        <div class="column">2</div>
                        <div class="column">3</div>
                    </div>
                </div>
            </div>
        </section>

        {/* La formula correcta */}
        <section class="hero is-black is-fullheight">
            <div class="hero-body">
                <div class="container">
                    <p class="title">
                        La fórmula correcta
                    </p>
                </div>
                <div class="container has-text-centered">
                    <div class="columns">
                        <div class="column">
                            {/* <img src={maskGroup} /> */}
                            <p>
                                Destructuración del trabajo al alza.
                            </p>
                        </div>
                        <div class="column">2</div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            {/* <img src={maskGroup} /> */}
                            <p>
                                Destructuración del trabajo al alza.
                            </p>
                        </div>
                        <div class="column">2</div>
                    </div>
                </div>
            </div>
        </section>

        {/* Propuesta de valor */}
        <section class="hero is-white is-fullheight">
            <div class="hero-head">
                <p class="title">
                    Propuesta de valor
                </p>
            </div>
            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="columns">
                        <div class="column">
                            {/* <img src={maskGroup} /> */}
                            <p>
                                Destructuración del trabajo al alza.
                            </p>
                        </div>
                        <div class="column">2</div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            {/* <img src={maskGroup} /> */}
                            <p>
                                Destructuración del trabajo al alza.
                            </p>
                        </div>
                        <div class="column">2</div>
                    </div>
                </div>
            </div>
        </section>

        {/* Footer */}
        <footer class="footer test">
            <div class="content has-text-centered">
                <p>
                    <strong>BlackMezas</strong> - © 2022 - All rights reserved
                </p>
            </div>
        </footer>
    </div>
)


export default(Home);