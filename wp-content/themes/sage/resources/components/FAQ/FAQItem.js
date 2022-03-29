import React from 'react';

const FAQItem = ({question,answer}) => {
    return ( 
        <div className="qa">
            <p>{question}</p>
            <p className="mb-3 mb-md-4">{answer}</p>
        </div>
     );
}
 
export default FAQItem;
