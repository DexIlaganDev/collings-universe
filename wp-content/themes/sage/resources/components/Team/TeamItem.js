import React from 'react';

const TeamItem = ({name,desc,image}) => {
    return ( 
        <div className="col-md-auto mb-3">
            <div className="justify-content-center d-flex">
                <div className="testimonial-box-top-border mb-5">
                    <div className="div bg-blue rounded-pill">
                        <img className="img-fluid rounded-circle" src={SAGE_DIST_PATH + `/assets/images/${image}`} />
                    </div>
                </div>
            </div>
            <p className="text-center fw-bold h5 blue text-center mt-1 mt-md-3">{name}</p>
            <p className="text-center blue text-center twitter-handle">

                <img src={SAGE_DIST_PATH + "/assets/images/Icon awesome-twitter-square.png" } className="img-fluid" />
                <a style={{marginLeft:5}} href={`https://twitter.com/${desc}`} target="_blank">@{desc}</a>
            </p>
        </div>
     );
}
 
export default TeamItem;