import React, { useState } from 'react';
import './styles.scss';
import 'bulma/css/bulma.min.css';

import { Link } from 'react-router-dom';
import { Twirl as Hamburger } from 'hamburger-react';
import Modal from 'react-modal';
import emailjs from 'emailjs-com';

import Footer from '../Footer'


const serviceId = "service_6g1uzjy";
const templateId = "template_1rwxo5a";
const userId = "EqWT88oV6h-MugGKM";


const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = () => {
        setValue("");
    }


    return {value, onchange:handleChange, onsubmit:handleSubmit};
}


const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      margin: 0,
      padding: 0,
      height: '101%',
      width: '101%',
      backgroundColor: 'black'
    },
};


const Contactanos = () => {
    const nameInput = useInput("")
    const emailInput = useInput("")
    const subjectInput = useInput("")
    const areaInput = useInput("Información")
    const messageInput = useInput("")

    const sendEmail = async (name, email, message, subject, area) => {
        try {
            const response = await emailjs.send(
                serviceId,
                templateId,
                { name, email, message, subject, area },
                userId
            );
    
            if (response.status === 200) {
                alert("Mensaje enviado, te responderemos en la brevedad posible");
                nameInput.onsubmit()
                emailInput.onsubmit()
                subjectInput.onsubmit()
                messageInput.onsubmit()
            }
        } catch (error) {
            alert("Failed to send email. Error: ", error);
        }
        
    };

    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <section className="hero is-black is-fullheight">
            <div className='hamburger'>
                <Hamburger
                    color={"#FFFFFF"} 
                    onToggle={ 
                        toggled => {
                            if (toggled) {
                                openModal()
                            } else {
                                closeModal()
                            }
                        }
                    } style={{color: 'red'}} />

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setIsOpen(false)}
                    contentLabel="Menu"
                    style={modalStyles}
                    ariaHideApp={false}
                >
                    <div className='menu'>
                        <ul className='ulItem'>
                            <li className='liItem'><Link to="/" className='linkTo'>Home</Link></li>
                            <li className='liItem'><Link to="../nosotros" className='linkTo'>Nosotros</Link></li>
                            <li className='liItem'><Link to="../asociarse" className='linkTo'>Asociarse</Link></li>
                            <li className='liItem'><Link to="../ubicaciones" className='linkTo'>Ubicaciones</Link></li>
                            <li className='is-active liItem'>Contáctanos</li>
                        </ul>
                    </div>
                </Modal>
            </div>

            <div className="hero-body contactanosSD">
                <div className='contactanos titles'>
                    <p className='title contactanos'>Contáctanos</p>
                    <p className='subtitle contactanos'>¡Queremos saber de tí!</p>
                </div>
                <div className='form containerF'>
                    <form>
                        <div className='form top'>
                            <div className='field'>
                                <label className='label'>Nombre</label>
                                <div className='control'>
                                    <input className='input' type='text' placeholder='p.ej. Javier García' value={nameInput.value} onChange={nameInput.onchange} />
                                </div>
                            </div>
                            <div className='field'>
                                <label className='label'>Email</label>
                                <div className='control'>
                                    <input className='input' type='email' placeholder='p.ej. jgarcia@gmail.com' value={emailInput.value} onChange={emailInput.onchange}/>
                                </div>
                            </div>
                        </div>
                        <div className='form top'>
                            <div className='field'>
                                <label className='label'>Sujeto</label>
                                <div className='control'>
                                    <input className='input' type="text" placeholder="p.ej. Información" value={subjectInput.value} onChange={subjectInput.onchange}/>
                                </div>
                            </div>
                            <div className='field area'>
                                <label className='label'>Área</label>
                                <div className='control'>
                                    <div className='select is-normal'>
                                        <select className='selectElement' value={areaInput.value} onChange={areaInput.onchange}>
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
                                    <textarea className='textarea' placeholder="Ingrese un mensaje..." value={messageInput.value} onChange={messageInput.onchange}></textarea>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button
                                type='submit'
                                disabled={!nameInput.value || !emailInput.value || !subjectInput.value || !messageInput.value}
                                className='button envMensaje'
                                onClick={() => sendEmail(nameInput.value, emailInput.value, messageInput.value, subjectInput.value, areaInput.value)}
                            >
                                    Enviar mensaje
                            </button>
                        </div>
                    </form>
                </div>

            </div>

            <div className='footerCon'>
                <Footer/>
            </div>
        </section>
    )
}

export default(Contactanos);