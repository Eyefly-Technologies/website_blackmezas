import React from 'react';
import './styles.scss';
import 'bulma/css/bulma.min.css';

import emailjs from 'emailjs-com';

import Footer from '../Footer'


const serviceId = "service_6g1uzjy";
const templateId = "template_1rwxo5a";
const userId = "EqWT88oV6h-MugGKM";

const sendEmail = async (name, email, message) => {
    try {
        const response = await emailjs.send(
            serviceId,
            templateId,
            { name, email, message },
            userId
        );

        if (response.status === 200) {
            alert("Successfully sent message.");
        }
    } catch (error) {
        alert("Failed to send email. Error: ", error);
    }
};


const Contactanos = () => {
    return (
    <section className="hero is-black is-fullheight">
        <div className="hero-body contactanosSD">
            <div className='contactanos titles'>
                <p className='title contactanos'>Contáctanos</p>
                <p className='subtitle contactanos'>¡Queremos oír de tí!</p>
            </div>
            <div className='form containerF'>
                <div className='form top'>
                    <div className='field'>
                        <label className='label'>Nombre</label>
                        <div className='control'>
                            <input className='input' type='text' placeholder='p.ej. Javier García' />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>Email</label>
                        <div className='control'>
                            <input className='input' type='email' placeholder='p.ej. jgarcia@gmail.com' />
                        </div>
                    </div>
                </div>
                <div className='form top'>
                    <div className='field'>
                        <label className='label'>Sujeto</label>
                        <div className='control'>
                            <input className='input' type="text" placeholder="p.ej. Información" />
                        </div>
                    </div>
                    <div className='field area'>
                        <label className='label'>Área</label>
                        <div className='control'>
                            <div className='select is-normal'>
                                <select className='selectElement'>
                                    <option className='selectOption'>Información</option>
                                    <option>Asociarse</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='form bottom'>
                    <div className='field message_'>
                        <label className='label'>Mensaje</label>
                        <div className='control'>
                            <textarea className='textarea' placeholder="Ingrese un mensaje..."></textarea>
                        </div>
                    </div>
                </div>
                <div>
                    <button
                        className='button envMensaje'
                        onClick={() => sendEmail("Luca", "gian.luca.99@hotmail.com", "Hola, esto es una prueba")}
                    >
                            Enviar mensaje
                    </button>
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