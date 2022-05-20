import React from 'react';
import './styles.scss';
import 'bulma/css/bulma.min.css';

import Footer from '../Footer'




const Contactanos = () => {
    return (
    <section className="hero is-black is-fullheight">
        <div className="hero-body contactanosSD">
            <div className='contactanos titles'>
                <p className='title contactanos'>Contáctanos</p>
                <p className='subtitle contactanos'>¡Queremos oír de tí!</p>
            </div>
            <div className='form container'>
                <div className='form top'>
                    <div class="field">
                        <label class="label">Nombre</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="p.ej. Javier García" />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input class="input" type="email" placeholder="p.ej. jgarcia@gmail.com" />
                        </div>
                    </div>
                </div>
                <div className='form top'>
                    <div class="field">
                        <label class="label">Sujeto</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="p.ej. Información" />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Área</label>
                        <div class="control">
                            <div class="select">
                                <select>
                                    <option>Información</option>
                                    <option>Asociarse</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='form bottom'>
                    <div class="field">
                        <label class="label">Mensaje</label>
                        <div class="control">
                            <textarea class="textarea" placeholder="Textarea"></textarea>
                        </div>
                    </div>
                </div>
                <div>
                    <button className='button contactanos asociarse'>Enviar mensaje</button>
                </div>
            </div>

        </div>

        <div className='footerCon'>
            <Footer/>
        </div>
    </section>
)
}

export default(Contactanos);