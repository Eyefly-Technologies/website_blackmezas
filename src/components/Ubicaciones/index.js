import React from 'react';
import './styles.scss';
import 'bulma/css/bulma.min.css';

const Ubicaciones = () => (
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
                    <div className="column">
                        <p className=''>Florida</p>
                    </div>
                    <div className="column">
                        <p className=''>Uruguay</p>
                    </div>
                </div>
                <div className="columns colgua">
                    <div className="column">
                        <p className=''>Colombia</p>
                    </div>
                    <div className="column">
                        <p className=''>Guatemala</p>
                    </div>
                </div>
                <div className="columns arg">
                    <div className="column">
                        <p className=''>Argentina</p>
                    </div>
                </div>
            </div>
        </section>
    </div>

)

export default(Ubicaciones)