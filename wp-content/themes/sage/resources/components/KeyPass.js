import React from 'react';
import ReactDOM from 'react-dom';


const KeyPass = () => {
    return ( 

        <section className="keypass__content__section">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center">

                        <video autoPlay={true} loop muted className="img-fluid raduis" >
                            <source src={SAGE_DIST_PATH + '/assets/images/card-key.mp4' } type="video/mp4" />
                        </video>
                        <p className="intro__content__maintext text-center text-white">
                        </p>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default KeyPass;