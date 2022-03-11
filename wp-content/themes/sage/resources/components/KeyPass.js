import React from 'react';
import ReactDOM from 'react-dom';


const KeyPass = () => {
    return ( 

        <section className="keypass__content__section">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center">
                        <img src={SAGE_DIST_PATH + '/assets/images/nft-thumbnail.png' } className="img-fluid raduis" />
                        <p className="intro__content__maintext text-center text-white">
                            We currently have 2 additional NFT sets in the works that JRNY NFT CLUB holders will get 1 <br />
                            FREE mint for each NFT they hold. The first set to come will have amazing art, be part of an epic story line and have its own utility.
                        </p>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default KeyPass;