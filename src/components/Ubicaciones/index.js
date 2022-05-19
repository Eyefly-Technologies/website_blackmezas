import React, { useState } from 'react';
import './styles.scss';
import 'bulma/css/bulma.min.css';

import { Link } from 'react-router-dom';
import { Twirl as Hamburger } from 'hamburger-react';
import Modal from 'react-modal';

import Florida from './Florida.png';
import Uruguay from './Uruguay.png';
import Colombia from './Colombia.png';
import Guatemala from './Guatemala.png';
import Argentina from './Argentina.png';


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


function Ubicaciones(){
    const [isShownFlorida, setIsShownFlorida] = useState(false);
    const [isShownUruguay, setIsShownUruguay] = useState(false);
    const [isShownColombia, setIsShownColombia] = useState(false);
    const [isShownGuatemala, setIsShownGuatemala] = useState(false);
    const [isShownArgentina, setIsShownArgentina] = useState(false);

    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return(
        <div>
            <div className='hamburger'>
                <Hamburger
                    color={modalIsOpen ? "#FFFFFF": "#000000"} 
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
                            <li className='liItem'><Link to="nosotros" className='linkTo'>Nosotros</Link></li>
                            <li className='liItem'><Link to="asociarse" className='linkTo'>Asociarse</Link></li>
                            <li className='is-active liItem'>Ubicaciones</li>
                            <li className='liItem'>Contáctanos</li>
                        </ul>
                    </div>
                </Modal>
            </div>
            <section className="hero is-fullheight paises">
                <div className="hero-body ubicaciones">
                    <div className="ubicaciones">
                        <p className="title ubicaciones">
                            UBICA<br/>CIO<br/>NES
                        </p>
                    </div>
                    <div className='hero-body two'>
                    </div>
                </div>
                <div className='paises'>
                    <div className="columns flur">
                        <div className="column cHover">
                            <p className='pais florida' onMouseEnter={() => setIsShownFlorida(true)} onMouseLeave={() => setIsShownFlorida(false)}>Florida</p>
                            {isShownFlorida && (
                                <>
                                    <img src={Florida} alt='' className='imgPais florida'/>
                                    <p className='proximamente'>Próximamente</p>
                                </>
                            )}
                        </div>
                        <div className="column cHover">
                            <p className='pais uruguay' onMouseEnter={() => setIsShownUruguay(true)} onMouseLeave={() => setIsShownUruguay(false)}>Uruguay</p>
                            {isShownUruguay && (
                                <>
                                    <img src={Uruguay} alt='' className='imgPais uruguay'/>
                                    <p className='proximamente'>Próximamente</p>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="columns colgua">
                        <div className="column cHover">
                            <p className='pais colombia' onMouseEnter={() => setIsShownColombia(true)} onMouseLeave={() => setIsShownColombia(false)}>Colombia</p>
                            {isShownColombia && (
                                <>
                                    <img src={Colombia} alt='' className='imgPais colombia'/>
                                    <p className='proximamente'>Próximamente</p>
                                </>
                            )}
                        </div>
                        <div className="column cHover">
                            <p className='pais guatemala' onMouseEnter={() => setIsShownGuatemala(true)} onMouseLeave={() => setIsShownGuatemala(false)}>Guatemala</p>
                            {isShownGuatemala && (
                                <>
                                    <img src={Guatemala} alt='' className='imgPais guatemala'/>
                                    <p className='proximamente'>Próximamente</p>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="columns arg">
                        <div className="column cHover">
                            <p className='pais argentina' onMouseEnter={() => setIsShownArgentina(true)} onMouseLeave={() => setIsShownArgentina(false)}>Argentina</p>
                            {isShownArgentina && (
                                <>
                                    <img src={Argentina} alt='' className='imgPais argentina'/>
                                    <p className='proximamente'>Próximamente</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default(Ubicaciones)