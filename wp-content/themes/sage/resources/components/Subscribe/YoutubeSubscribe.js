import React from 'react';


const YoutubeSubscribe = () => {

   

    return ( 
        <div className="bg__yt__sub container-fluid blue-gradient py-2 py-md-5" style={{backgroundImage : `url(${SAGE_DIST_PATH + '/assets/images/subscribe.png'})`}}>
            <div className="container py-5 d-none">
                <p className="text-center h4 text-white">Stay in the know</p>
                <p className="text-center h1 text-white">Subscribe to our Youtube channel!</p>
                <div className="text-center">
                    <a className="btn btn-white-outline rounded-pill px-5 py-2">SUBSCRIBE</a>
                </div>
            </div>
        </div>
     );
}
 
export default YoutubeSubscribe;