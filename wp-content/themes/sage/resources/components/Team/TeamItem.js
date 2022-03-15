import React from 'react';

const TeamItem = ({name,desc}) => {
    return ( 
        <div className="col-md-12">
            <div className="justify-content-center d-flex">
                <div className="testimonial-box-top-border mb-5">
                    <div className="div bg-blue rounded-pill"></div>
                </div>
            </div>
            <p className="text-center fw-bold h5 blue text-center mt-3">{name}</p>
            <p className="text-center blue text-center">{desc}</p>
        </div>
     );
}
 
export default TeamItem;