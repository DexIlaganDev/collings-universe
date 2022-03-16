import React, { useState, useEffect } from 'react';

const KeyPassPage = () => {
    return ( 
        <section id="keypass-page">
            <div className="container">
                <div className="row">
                    <div className="keypass__wrapper col">

                        <section className="keypass__section">
                            
                            <header className="keypass__section__header">
                                <span className='text-white font-avenir-medium'>COLLINGS UNIVERSE</span>
                                <div className='text-white font-avenir-medium'>KEYPASS</div>
                            </header>

                            <div className="keypass__section-mint-left">
                                <span className='text-blue font-hn-light'>0 / 3333 left</span>
                            </div>

                            <button className="btn btn-connect text-white">CONNECT</button>

                            <div className="keypass__section-mint-max text-white font-hn-light">1 MINT MAX (.1111 ETH)</div>

                        </section>

                        
                        <section className="keypass__gif">
                            <div className="keypass__giff__wrapper">
                                <img src={SAGE_DIST_PATH + `/assets/images/card-alpha.gif`} className="img__keypass-gif" />
                            </div>
                        </section>


                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default KeyPassPage;