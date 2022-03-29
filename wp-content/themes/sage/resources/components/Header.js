import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
    
    const joinBtnClickHandler = () => {
        console.log('Join')
    }

    return ( 
        
        <div className="container-fluid bg-blue-dark hero px-0">
            <div className="container-fluid bg-black navbar-wrapper sticky-top">
                <nav className="navbar fixed-top navbar-expand-lg bg-black">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src={SAGE_DIST_PATH + `/assets/images/Mask Group 1.png`} className="img-fluid logo" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
                            </ul>
                            <div className="d-flex">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link gray-white active" aria-current="page" href="#UTILITY">UTILITY</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link gray-white" href="#FAQ">FAQ</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link gray-white" href="#TEAM">TEAM</a>
                                    </li>
                                    <li className="nav-item my-auto">
                                        <ul>
                                            <li className="d-inline-block mx-2">
                                                <a target="_blank" href="https://www.facebook.com/collingsuniverse"><img src={SAGE_DIST_PATH + '/assets/images/Icon awesome-facebook-square.png'} className="img-fluid" /></a>
                                            </li>
                                            <li className="d-inline-block mx-2">
                                             
                                                <a target="_blank" href="https://www.instagram.com/collingsuniverse/"><img src={SAGE_DIST_PATH + '/assets/images/Icon awesome-instagram.png'} className="img-fluid" /></a>
                                            </li>
                                            <li className="d-inline-block mx-2">
                                             
                                                <a target="_blank" href="https://twitter.com/CollingsVerse"><img src={SAGE_DIST_PATH + '/assets/images/Icon awesome-twitter-square.png'} className="img-fluid" /></a>
                                            </li>
                                            <li className="d-inline-block mx-2">
                                             
                                                <a target="_blank" href="https://discord.gg/collingsuniverse"><img src={SAGE_DIST_PATH + '/assets/images/Icon awesome-discord.png'} className="img-fluid" /></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <button onClick={joinBtnClickHandler} className="btn btn-blue radius mx-3 px-4">JOIN</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

        
    
    );
}
 
export default Header;