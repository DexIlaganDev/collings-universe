import React from 'react';
import ReactDOM from 'react-dom';
import FAQItem from './FAQItem';

const FAQ = () => {

    const qas = [
        {   id : 1, 
            question : 'What can I expect from the Collings Universe?', 
            answer : 'More info will be posted before the mint.' 
        },
        {   id : 2, 
            question : 'What are the initial benefits of having an Collings (Atlas) Keypass?', 
            answer : 'The cost of the NFT mint will be determined 24 hours before it goes live. This will not be your ordinary cheap NFT mint from an anonymous team. When getting a NFT, you’re essentially getting 3 NFT sets for one, as holders will get FREE mint to our next few sets, among many other benefits.' 
        },
        {   id : 3, 
            question : 'What kind of NFTs are you planning to release?', 
            answer : 'Once you have a NFT, you will be able to join our private community chat groups and announcement channels. To do this you just need to verify ownership using Collab Land in Discord. More details will be posted in Discord info channels.' 
        },
        {   id : 4, 
            question : 'What do you mean by real-world values?', 
            answer : 'Yes, you will be able to mint 1 NFT each from our future NFT sets for each NFT that you hold. So if you have 3, then you will get 3 each from the next 2 NFT sets we launch. This will also increase your odds of getting whitelist spots in future launchpad projects and other benefits to come.' 
        },
        {   id : 5, 
            question : 'What community plans do you have moving forward?', 
            answer : 'Lorem ipsum dolor sit met, consectetuer aqipiscing elit, sed diam nonummy nibh euismod tincidunt ut lagret dolore magna aliquam erat volutpat. Ut wisi enim ad minim venom, quis nostrud exerci.' 
        }
    ]

    return ( 
        <div className="container-fluid py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 ">
                        <p className="text-center h1 fw-bold blue mb-5">FAQ</p>
                            
                        { qas.map( q => <FAQItem key={q.id} question={q.question} answer={q.answer} /> ) }

                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default FAQ;