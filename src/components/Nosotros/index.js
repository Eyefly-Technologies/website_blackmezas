import React, { useState, useEffect, useRef } from 'react';
import './styles.scss';
import 'bulma/css/bulma.min.css';

import Carousel from "react-simply-carousel";
import { Link } from 'react-router-dom';
import { Twirl as Hamburger } from 'hamburger-react';
import Modal from 'react-modal';

import Nosotros1 from './nosotros1.png';
import Nosotros2 from './nosotros2.png';
import Nosotros3 from './nosotros3.png';
import Nosotros4 from './nosotros4.png';
import Nosotros5 from './nosotros5.png';

import MeetingRoom from './meetingRoom.png';
import HotDesking from './businessTime.png';
import Flag from './Flag.png';
import InternetSpeed from './InternetSpeed.png';
import Communication from './Communication.png';
import VirtualOffice from './VideoConference.png';

import Parqueo from './parqueo.png';
import Cafeteria from './cafeteria.png';
import Arquitectura from './arquitectura.png';
import Espacios from './espacios.png';

import Pattern from './Pattern.png';

import Diploma from './Diploma.png';
import Marker from './Marker.png';

import GF1 from './GF1.png';
import GF2 from './GF2.png';
import GF3 from './GF3.png';
import GF4 from './GF4.png';
import LeftArrowPG from './ArrowLeftPG.png';
import RightArrowPG from './ArrowRightPG.png';

import Footer from '../Footer'


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


const Nosotros = () => {
    const [isParqueoActive, setIsParqueoActive] = useState(true);
    const [isCafeteriaActive, setIsCafeteriaActive] = useState(false);
    const [isArquitecturaActive, setIsArquitecturaActive] = useState(false);
    const [isEspaciosActive, setIsEspaciosActive] = useState(false);

    const [activeSlide, setActiveSlide] = useState(0);

    const inputRefParqueo = useRef(null);
    const inputRefEspacios = useRef(null);
    const inputRefCafeteria = useRef(null);
    const inputRefArquitectura = useRef(null);

    function parqueoHandler() {
        setIsParqueoActive(true);
        setIsCafeteriaActive(false);
        setIsArquitecturaActive(false);
        setIsEspaciosActive(false);
    }

    function espaciosHandler() {
        setIsParqueoActive(false);
        setIsCafeteriaActive(false);
        setIsArquitecturaActive(false);
        setIsEspaciosActive(true);
    }

    function cafeteriaHandler() {
        setIsParqueoActive(false);
        setIsCafeteriaActive(true);
        setIsArquitecturaActive(false);
        setIsEspaciosActive(false);
    }

    function arquitecturaHandler() {
        setIsParqueoActive(false);
        setIsCafeteriaActive(false);
        setIsArquitecturaActive(true);
        setIsEspaciosActive(false);
    }
    

    useEffect(() => {
        if (isParqueoActive) {
            let id = setTimeout(() => {
                espaciosHandler()
            }, 3000);
            return () => {clearTimeout(id)}
        } else if (isEspaciosActive) {
            let id = setTimeout(() => {
                cafeteriaHandler()
            }, 3000);
            return () => {clearTimeout(id)}
        } else if (isCafeteriaActive) {
            let id = setTimeout(() => {
                arquitecturaHandler()
            }, 3000);
            return () => {clearTimeout(id)}
        } else if (isArquitecturaActive) {
            let id = setTimeout(() => {
                parqueoHandler()
            }, 3000);
            return () => {clearTimeout(id)}
        }
    }, [isParqueoActive, isEspaciosActive, isCafeteriaActive, isArquitecturaActive]);


    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    

    return (
        <>
            {/* Menu */}
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
                            <li className='is-active liItem'>Nosotros</li>
                            <li className='liItem'><Link to="../asociarse" className='linkTo'>Asociarse</Link></li>
                            <li className='liItem'><Link to="../ubicaciones" className='linkTo'>Ubicaciones</Link></li>
                            <li className='liItem'><Link to="../contactanos" className='linkTo'>Contáctanos</Link></li>
                        </ul>
                    </div>
                </Modal>
            </div>

            {/* Acerca de nosotros */}
            <section className="hero is-black is-fullheight">
                <div className="hero-head aNosotros">
                    <div className='sectionTitle'>
                        <p className='aNosotrosSub'>Acerca de nosotros</p>
                        <div className='line aNosotros'></div>
                    </div>
                    <p className='aNosotrosTitle'>Creemos en el valor de la excelencia</p>
                </div>
                <div className='hero-body aNosotrosContainer'>
                    <div className='topImages'>
                        <img src={Nosotros1} alt='' className='imgAnosotros topImg' />
                        <img src={Nosotros3} alt='' className='imgAnosotros' />
                        <img src={Nosotros5} alt='' className='imgAnosotros hid' />
                    </div>
                    <div className='bottomImages'>
                        <img src={Nosotros2} alt='' className='imgAnosotros topImg'/>
                        <img src={Nosotros4} alt='' className='imgAnosotros'/>
                    </div>
                </div>
            </section>

            {/* Por que BlackMezas */}
            <section className="hero is-black is-fullheight">
                <div className="hero-body pqBM">
                    <div className='pqBM props'>
                        <div className='columns pqbmTop'>
                            <div className='column '>
                                <div className='pqBM prop'>
                                    <img src={MeetingRoom} alt='' className='icnPQBM'/>
                                    <p className='pqBM prop desc'>Múltiples espacios de reunión</p>
                                </div>
                            </div>
                            <div className='column '>
                                <div className='pqBM prop'>                            
                                    <img src={HotDesking} alt='' className='icnPQBM'/>
                                    <p className='pqBM prop desc'>HotDesking disponible</p>
                                </div>
                            </div>
                        </div>

                        <div className='columns pqbmCenter'>
                            <div className='column '>
                                <div className='pqBM prop'>
                                    <img src={Flag} alt='' className='icnPQBM'/>
                                    <p className='pqBM prop desc'>Múltiples países</p>
                                </div>
                            </div>
                            <div className='column '>
                                <div className='pqBM prop'>                            
                                    <img src={InternetSpeed} alt='' className='icnPQBM'/>
                                    <p className='pqBM prop desc'> Internet de primera gama</p>
                                </div>
                            </div>
                        </div>

                        <div className='columns pqbmBottom'>
                            <div className='column '>
                                <div className='pqBM prop'>
                                    <img src={Communication} alt='' className='icnPQBM'/>
                                    <p className='pqBM prop desc'>Servicios de recepción</p>
                                </div>
                            </div>
                            <div className='column '>
                                <div className='pqBM prop'>                            
                                    <img src={VirtualOffice} alt='' className='icnPQBM'/>
                                    <p className='pqBM prop desc'>Oficinas virtuales</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='pqBM pce'>
                        <div className='sectionTitle pqbm'>
                            <p className='pqbm pcs'>¿Por qué Blackmezas?</p>
                            <div className='line pqbm'></div>
                        </div>
                        <p className='pceTitle'>Premium Coworking Environments</p>
                        <p className='pceDesc'>Nuestros centros cuentan con beneficios de primer orden.</p>
                    </div>
                </div>
            </section>

            {/* Nuestras instalaciones */}
            <section className="hero is-white is-fullheight">
                <div className="hero-head nInstalaciones">
                    <div className='sectionTitle'>
                        <p className='nInstalacionesSub'>Nuestras instalaciones</p>
                        <div className='line nInstalaciones'></div>
                    </div>
                    <p className='nIntalacionesTitle'>Instalaciones que respiran excelencia</p>
                </div>
                <div className="hero-body nInstalacionesG">
                    <div className='btns nInstalaciones'>
                        <div>
                            <button className={isParqueoActive ? 'button instalacionesActive': 'button instalaciones'} onClick={parqueoHandler} ref={inputRefParqueo}>Parqueo in-situ</button>
                            <button className={isEspaciosActive ? 'button instalacionesActive': 'button instalaciones'} onClick={espaciosHandler} ref={inputRefEspacios}>Espacios confortables</button>
                        </div>
                        <div>
                            <button className={isCafeteriaActive ? 'button instalacionesActive': 'button instalaciones'} onClick={cafeteriaHandler} ref={inputRefCafeteria}>Cafetería</button>
                            <button className={isArquitecturaActive ? 'button instalacionesActive': 'button instalaciones'} onClick={arquitecturaHandler} ref={inputRefArquitectura}>Arquitectura de primera <br/>línea</button>
                        </div>
                    </div>
                    <div className='images nInstalaciones'>
                        {isParqueoActive && <img src={Parqueo} alt='' className='imgNinstalaciones' />}
                        {isEspaciosActive && <img src={Espacios} alt='' className='imgNinstalaciones'/>}
                        {isCafeteriaActive && <img src={Cafeteria} alt='' className='imgNinstalaciones'/>}
                        {isArquitecturaActive && <img src={Arquitectura} alt='' className='imgNinstalaciones'/>}
                    </div>

                </div>
                
            </section>

            {/* Que aportamos */}
            <section className="hero is-black is-fullheight qAportamosCon">
                <div className="hero-head qaportamos">
                    <div className='sectionTitle'>
                        <p className='nosotros qaportamos'>Nosotros</p>
                        <div className='line'></div>
                    </div>
                    <p className='qAportamos qaportamos'>¿Qué aportamos?</p>
                </div>
                <div className="hero-body qAportamosCon">
                    <div className='container has-text-centered qAportamosCC'>
                        <div className='columns qaportamos'>
                            <div className='column qaportamos'>
                                <div className='contQaportamos'>
                                    <img src={Diploma} alt='' className='iconQaportamos' />
                                    <p className='qaportamosTitle'>Experiencia</p>
                                    <p className='qaportamosDesc'>
                                        Tenemos más de 60 años de actividad combinada en desarrollos inmobiliarios 
                                        residenciales y comerciales, así como productos y servicios relacionados.
                                    </p>
                                </div>
                            </div>
                            <div className='column qaportamos'>
                                <div className='contQaportamos'>
                                    <img src={Marker} alt='' className='iconQaportamos' />
                                    <p className='qaportamosTitle'>Referencia</p>
                                    <p className='qaportamosDesc'>
                                        BlackMezas® posee trayectoria en varios países de LATAM, 
                                        de Europa y en Estados Unidos.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Galeria de fotos */}
            <section className="hero is-white is-fullheight photoGallery">
                <div className="hero-head galeriaFotos">
                    <div className='sectionTitle'>
                        <p className='pGallerySub'>Galería de fotos</p>
                        <div className='line pGallery'></div>
                    </div>
                    <p className='pGalleryTitle'>Tu futuro espacio de trabajo</p>
                </div>
                <div className='photoGalleryContainer'>
                    <Carousel
                        className='photoGalleryCarousel'
                        updateOnItemClick
                        // autoplay
                        // delay={800}
                        containerProps={{
                        style: {
                            width: "100%",
                            justifyContent: "space-evenly",
                        }
                        }}
                        activeSlideIndex={activeSlide}
                        activeSlideProps={{className: 'activeItem'}}
                        itemsListProps={{
                            style: {
                                display: 'flex',
                                alignItems: "flex-end",
                            }
                        }}
                        onRequestChange={setActiveSlide}
                        forwardBtnProps={{
                            className: 'forwardPhotoGallery',
                            children: <img src={RightArrowPG} alt='' />
                        }}
                        backwardBtnProps={{
                            className: 'backwardPhotoGallery',
                            children: <img src={LeftArrowPG} alt='' />
                        }}
                        responsiveProps={[
                            {
                                maxWidth: 768,
                                itemsToShow: 1,
                                // itemsToScroll: 4,
                                
                            },
                          ]}
                        itemsToShow={3}
                        speed={800}
                    >
                        <div className='nonActiveItem'>
                            <img src={GF1} alt='' className='imgPhotoGallery'/>
                        </div>
                        <div className='nonActiveItem'>
                            <img src={GF2} alt='' className='imgPhotoGallery'/>
                        </div>
                        <div className='nonActiveItem'>
                            <img src={GF3} alt='' className='imgPhotoGallery'/>
                        </div>
                        <div className='nonActiveItem'>
                            <img src={GF4} alt='' className='imgPhotoGallery'/>
                        </div>
                    </Carousel>
                </div>
            </section>

            {/* Contactanos */}
            <section className="hero is-black is-fullheight">
                <div className="hero-body contactanos">
                    <div className='contactanos left'>
                        <div className='sectionTitle'>
                            <p className='contactanosSub'>Contáctanos</p>
                            <div className='line contactanos'></div>
                        </div>
                        <p className='titleContactanos'>¡Queremos saber de ti!</p>
                        <p className='descContactanos'>No dude en contactarnos y  le responderemos en la brevedad posible.</p>
                        <Link to="../contactanos" className='linkTo'><button className='button contactanos'>Contactános</button></Link>
                    </div>
                    <div className='patternDiv'>
                        <img src={Pattern} alt='' className='patternContactanos'/>
                    </div>
                </div>
                <Footer/>
            </section>

        </>
    )
}

export default(Nosotros);