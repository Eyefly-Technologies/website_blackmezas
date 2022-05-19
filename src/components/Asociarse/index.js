import React from 'react';
import './styles.scss';
import 'bulma/css/bulma.min.css';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import AS1 from './AS1.png';
import AS2 from './AS2.png';
import AS3 from './AS3.png';
import AS4 from './AS4.png';
import Logo from './logo.png';
import RightArrow from './rightArrow.png';
import LeftArrow from './leftArrow.png';


const Asociarse = () => (
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
                                <p className='beneficioTitle'>Beneficios de nuestro modelo</p>
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
                                <p className='beneficioTitle'>Beneficios de nuestro modelo</p>
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
                                <p className='beneficioTitle'>Beneficios de nuestro modelo</p>
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
                                <p className='beneficioTitle'>Beneficios de nuestro modelo</p>
                                <p className='beneficioText'>Rentabilidad</p>
                                <p className='beneficioDesc'>exponenciada en activos inmovilizados.</p>
                            </div>
                            <button className='button contactanos asociarse'>Contactános</button>
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
)

export default(Asociarse);