import React from 'react';

const FAQItem = ({question,answer}) => {
    return ( 
        <div className="qa">
            <p>{question}</p>
            <p>{answer}</p>
        </div>
     );
}
 
export default FAQItem;
