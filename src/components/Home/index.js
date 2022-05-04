import React from 'react';
import styles from './styles.scss';
import 'bulma/css/bulma.min.css';


const Home = () => (
    <div>
        {/* Logo */}
        <section class="hero is-black is-fullheight">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <p class="title">
                        Fullheight hero
                    </p>
                    <p class="subtitle">
                        Fullheight subtitle
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
                        <div class="column">1</div>
                        <div class="column">2</div>
                        <div class="column">3</div>
                        <div class="column">4</div>
                    </div>
                </div>
            </div>
        </section>

        {/* La formula correcta */}
        <section class="hero is-black is-fullheight">
            <div class="hero-head">
                <p class="title">
                    Una perspectiva continental
                </p>
            </div>
            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="columns">
                        <div class="column">1</div>
                        <div class="column">2</div>
                        <div class="column">3</div>
                        <div class="column">4</div>
                    </div>
                </div>
            </div>
        </section>

        {/* Propuesta de valor */}
        <section class="hero is-black is-fullheight">
            <div class="hero-head">
                <p class="title">
                    Una perspectiva continental
                </p>
            </div>
            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="columns">
                        <div class="column">1</div>
                        <div class="column">2</div>
                        <div class="column">3</div>
                        <div class="column">4</div>
                    </div>
                </div>
            </div>
        </section>

        {/* Footer */}
        <footer class="footer">
            <div class="content has-text-centered">
                <p>
                <strong>BlackMezas</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                </p>
            </div>
        </footer>
    </div>
)


export default(Home);