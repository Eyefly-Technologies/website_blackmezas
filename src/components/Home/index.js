import React from 'react';
import './styles.scss';
import 'bulma/css/bulma.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Twirl as Hamburger } from 'hamburger-react';
import Modal from 'react-modal';

import Footer from '../Footer';

import logo from './logo.svg';
import img1800_2018 from './1800-2018.png';
import img2019 from './2019.png';
import img2020 from './2020.png';
import img2021 from './2021.png';
import img2022 from './2022.png';

import maskGroup from './MaskGroup.svg';
import Schedule from './Schedule.svg';
import Medal from './Medal.svg';
import Wallet from './Wallet.svg';
import Marker from './Marker.svg'




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

const Home = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
    <div>
        <div className='hamburger'>
            <Hamburger
                color="#FFFFFF" 
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
            >
                <div>
                    <p>HOLA</p>
                </div>
            </Modal>
        </div>

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
        <section className="hero is-black is-fullheight">
            <Carousel autoPlay infiniteLoop showArrows={false} showIndicators={false} showThumbs={false} showStatus={false} interval={4000} emulateTouch autoFocus={false} stopOnHover={false}>
                <div>
                    <img src={img1800_2018} alt='' />
                </div>
                <div>
                    <img src={img2019} alt='' />
                </div>
                <div>
                    <img src={img2020} alt='' />
                </div>
                <div>
                    <img src={img2021} alt='' />
                </div>
                <div>
                    <img src={img2022} alt='' />
                </div>
            </Carousel>
        </section>

        {/* Perspectiva continental */}
        <section className="hero is-image is-fullheight">
            <div className="hero-head">
                <p className="title perspCon">
                    Una perspectiva continental
                </p>
            </div>
            <div className="hero-body">
                <div className="container has-text-centered perspCon">
                    <div className="columns perspCon">
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
            <div className="hero-body formCorrMobile">
                <div className="container">
                    <p className="title formcorr">
                        La fórmula correcta
                    </p>
                </div>
                <div className="container">
                    <div className="columns formCorrTop">
                        <div className="column">
                            <div className='formCorrCon'>
                                <p className='formCorrNum'>01</p>
                                <p className='formCorrTit'>Costo</p>
                            </div>
                            <p className='formCorrDesc'>
                                Pagas lo que consumes en espacio y tiempo.
                            </p>
                        </div>
                        <div className="column">
                            <div className='formCorrCon'>
                                <p className='formCorrNum'>02</p>
                                <p className='formCorrTit'>Flexibilidad</p>
                            </div>
                            <p className='formCorrDesc'>
                                Contratos a la medida de tus necesidades.
                            </p>
                        </div>
                    </div>
                    <div className="columns formCorrBottom">
                        <div className="column">
                            <div className='formCorrCon'>
                                <p className='formCorrNum'>03</p>
                                <p className='formCorrTit'>Amenities</p>
                            </div>
                            <p className='formCorrDesc'>
                                Amenidades hoteleras que te generan valor.
                            </p>
                        </div>
                        <div className="column">
                            <div className='formCorrCon'>
                                <p className='formCorrNum'>04</p>
                                <p className='formCorrTit'>Comunidad</p>
                            </div>
                            <p className='formCorrDesc'>
                                Forma parte de un selecto club con beneficios considerables.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Propuesta de valor */}
        <section className="hero is-white is-fullheight">
            <div className="hero-head">
                <p className="title pvalor">
                    Propuesta de valor
                </p>
            </div>
            <div className="hero-body pvalor">
                <div className="columns pvalor top">
                    <div className="column pvalor">
                        <div className='pvalorItems'>
                            <img src={Schedule} alt=''/>
                            <p className='pvalorTit'>Flexibilidad</p>
                            <p className='pvalorDesc'>
                                Puedes rentar por la cantidad de tiempo que desees. ¿Un mes? ¿Tres años? No hay problema.
                            </p>
                        </div>
                    </div>
                    <div className="column pvalor">
                        <div className='pvalorItems'>
                            <img src={Medal} alt='' className='imgMedal'/>
                            <p className='pvalorTit'>Exclusividad</p>
                            <p className='pvalorDesc'>
                                Tendremos las mejores instalaciones y nuestros clientes serán parte de un selecto club, lleno de beneficios.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="columns pvalor">
                    <div className="column pvalor">
                        <div className='pvalorItems'>
                            <img src={Wallet} alt=''/>
                            <p className='pvalorTit'>Value for money</p>
                            <p className='pvalorDesc'>
                                En BlackMezas todo está incluido; desde café hasta horas estipuladas de reunión.
                            </p>
                        </div>
                    </div>
                    <div className="column pvalor">
                        <div className='pvalorItems'>
                            <img src={Marker} alt='' className='imgMarker'/>
                            <p className='pvalorTit'>Ubicación</p>
                            <p className='pvalorDesc'>
                                BlackMezas estará disponible en los mejores hoteles de la región.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        {/* Footer */}
        <Footer />
    </div>
)
}


export default(Home);