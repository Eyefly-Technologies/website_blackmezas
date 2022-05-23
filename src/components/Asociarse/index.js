import React, { useState} from 'react';
import './styles.scss';
import 'bulma/css/bulma.min.css';

import { Link } from 'react-router-dom';
import { Twirl as Hamburger } from 'hamburger-react';
import Modal from 'react-modal';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import AS1 from './AS1.png';
import AS2 from './AS2.png';
import AS3 from './AS3.png';
import AS4 from './AS4.png';
import Logo from './logo.png';
import RightArrow from './rightArrow.png';
import LeftArrow from './leftArrow.png';


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

const Asociarse = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
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
                            <li className='is-active liItem'>Asociarse</li>
                            <li className='liItem'><Link to="../ubicaciones" className='linkTo'>Ubicaciones</Link></li>
                            <li className='liItem'><Link to="../contactanos" className='linkTo'>Contáctanos</Link></li>
                        </ul>
                    </div>
                </Modal>
            </div>

            <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={60}
                    lockOnWindowScroll={true}
                    totalSlides={4}
                    isPlaying={true}
                    interval={5000}
                    orientation={'vertical'}
                    className='carouselAsociarse'
                >
                    <Slider>
                        <Slide index={0} className='slide'>
                            <img src={AS1} alt='' />
                            <div className='blurAsociarse'>
                                <div className='blurContainer'>
                                    <div className='logoAsociarse'>
                                        <img src={Logo} alt=''/>
                                    </div>
                                    <div className='asociarseText'>
                                        <p className='beneficioTitle'>Beneficios de nuestro modelo hotelero</p>
                                        <p className='beneficioText'>Ocupación</p>
                                        <p className='beneficioDesc'>de espacios superfluos en el hotel.</p>
                                    </div>
                                    <button className='button contactanos asociarse'>Contactános</button>
                                </div>
                            </div>
                            <div className='numberSlide'>
                                <p className='numberActive'>01</p>
                                <div className='activeLine'></div>
                                <p>02</p>
                                <p>03</p>
                                <p>04</p>
                            </div>
                        </Slide>
                        <Slide index={1} className='slide'>
                            <img src={AS2} alt='' />
                            <div className='blurAsociarse'>
                                <div className='blurContainer'>
                                    <div className='logoAsociarse'>
                                        <img src={Logo} alt=''/>
                                    </div>
                                    <div className='asociarseText'>
                                        <p className='beneficioTitle'>Beneficios de nuestro modelo hotelero</p>
                                        <p className='beneficioText'>Clientela</p>
                                        <p className='beneficioDesc'>que incide en su actividad hotelera.</p>
                                    </div>
                                    <button className='button contactanos asociarse'>Contactános</button>
                                </div>
                            </div>
                            <div className='numberSlide'>
                                <p className='numberActive'>02</p>
                                <div className='activeLine'></div>
                                <p>03</p>
                                <p>04</p>
                                <p>01</p>
                            </div>
                        </Slide>
                        <Slide index={2} className='slide'>
                            <img src={AS3} alt='' />
                            <div className='blurAsociarse'>
                                <div className='blurContainer'>
                                    <div className='logoAsociarse'>
                                        <img src={Logo} alt=''/>
                                    </div>
                                    <div className='asociarseText'>
                                        <p className='beneficioTitle'>Beneficios de nuestro modelo hotelero</p>
                                        <p className='beneficioText'>Diversificación</p>
                                        <p className='beneficioDesc'>de riesgo hotelero inherente.</p>
                                    </div>
                                    <button className='button contactanos asociarse'>Contactános</button>
                                </div>
                            </div>
                            <div className='numberSlide'>
                                <p className='numberActive'>03</p>
                                <div className='activeLine'></div>
                                <p>04</p>
                                <p>01</p>
                                <p>02</p>
                            </div>
                        </Slide>
                        <Slide index={3} className='slide'>
                            <img src={AS4} alt='' className='imgTest'/>
                            <div className='blurAsociarse'>
                                <div className='blurContainer'>
                                    <div className='logoAsociarse'>
                                        <img src={Logo} alt=''/>
                                    </div>
                                    <div className='asociarseText'>
                                        <p className='beneficioTitle'>Beneficios de nuestro modelo hotelero</p>
                                        <p className='beneficioText'>Rentabilidad</p>
                                        <p className='beneficioDesc'>exponenciada en activos inmovilizados.</p>
                                    </div>
                                    <button className='button envMensaje'>Contactános</button>
                                </div>
                            </div>
                            <div className='numberSlide'>
                                <p className='numberActive'>04</p>
                                <div className='activeLine'></div>
                                <p>01</p>
                                <p>02</p>
                                <p>03</p>
                            </div>
                        </Slide>
                    </Slider>
                    <div className='asociarseButtons'>
                        <ButtonBack className='btnBack'><img src={LeftArrow} alt='' /></ButtonBack>
                        <ButtonNext className='btnNext'><img src={RightArrow} alt='' /></ButtonNext>
                    </div>
            </CarouselProvider>
        </>
    )
}

export default(Asociarse);