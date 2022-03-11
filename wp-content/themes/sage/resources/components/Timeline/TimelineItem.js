import React from 'react';
import ReactDOM from 'react-dom';

const TimelineItem = ({timelineImage, addClasses,title,desc}) => {
    return ( 
        <div className='timeline__list__item'>

            <div className="timeline__body__wrap">
                <h2 className="timeline__item timeline__item--year border-0 bg-none">
                    <div className="bg-white rounded-pill p-3">
                        <img src={ SAGE_DIST_PATH + `/assets/images/${timelineImage}` } className="img-fluid" />
                    </div>
                </h2>
                
                <div className={ `timeline__item timeline__item__desc ${addClasses}` }>
                    <h3 className="timeline__title h5 blue mb-3">{title}</h3>
                    <p className="blue">{desc}</p>
                </div>
            </div>

        </div>
     );
}
 
export default TimelineItem;