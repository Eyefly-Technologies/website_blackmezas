import React, { useState } from 'react';
import './styles.scss';
import 'bulma/css/bulma.min.css';

import Florida from './Florida.png';
import Uruguay from './Uruguay.png';
import Colombia from './Colombia.png';
import Guatemala from './Guatemala.png';
import Argentina from './Argentina.png';


function Ubicaciones(){
    const [isShownFlorida, setIsShownFlorida] = useState(false);
    const [isShownUruguay, setIsShownUruguay] = useState(false);
    const [isShownColombia, setIsShownColombia] = useState(false);
    const [isShownGuatemala, setIsShownGuatemala] = useState(false);
    const [isShownArgentina, setIsShownArgentina] = useState(false);

    return(
        <div>
            <section className="hero is-fullheight">
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
                        <div className="column testc">
                            <p className='pais florida' onMouseEnter={() => setIsShownFlorida(true)} onMouseLeave={() => setIsShownFlorida(false)}>Florida</p>
                            {isShownFlorida && (
                                <>
                                    <img src={Florida} alt='' className='imgPais florida'/>
                                    <p className='proximamente'>Próximamente</p>
                                </>
                            )}
                        </div>
                        <div className="column testc">
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
                        <div className="column">
                            <p className='pais colombia' onMouseEnter={() => setIsShownColombia(true)} onMouseLeave={() => setIsShownColombia(false)}>Colombia</p>
                            {isShownColombia && (
                                <div>
                                    <img src={Colombia} alt='' className='imgPais colombia'/>
                                    <p className='proximamente'>Próximamente</p>
                                </div>
                            )}
                        </div>
                        <div className="column">
                            <p className='pais' onMouseEnter={() => setIsShownGuatemala(true)} onMouseLeave={() => setIsShownGuatemala(false)}>Guatemala</p>
                            {isShownGuatemala && (
                                <div>
                                    <img src={Guatemala} alt='' className='imgPais guatemala'/>
                                    <p className='proximamente'>Próximamente</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="columns arg">
                        <div className="column">
                            <p className='pais' onMouseEnter={() => setIsShownArgentina(true)} onMouseLeave={() => setIsShownArgentina(false)}>Argentina</p>
                            {isShownArgentina && (
                                <div>
                                    <img src={Argentina} alt='' className='imgPais argentina'/>
                                    <p className='proximamente'>Próximamente</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default(Ubicaciones)