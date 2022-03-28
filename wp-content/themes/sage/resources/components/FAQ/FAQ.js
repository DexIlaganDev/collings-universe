import React from 'react';
import ReactDOM from 'react-dom';
import FAQItem from './FAQItem';

const FAQ = () => {

    const qas = [
        {   id : 1, 
            question : 'How can I mint a Collings Universe NFT?', 
            answer : 'The community will be able to mint via our website. Once the mint begins, the mint button on our website will redirect you to the mint page' 
        },
        {
            id : 6,
            question : 'What is the mint price?',
            answer : 'Free + Gas Fees (we suggest allocating at lease .02 for gas fees)'
        },
        {
            id : 7,
            question : 'How do I get private community access?',
            answer : 'Once you have a Collings Universe NFT, you will be able to join our private community chat groups in Discord. To do this you just need to verify ownership using Collab Land.'
        },
        {
            id : 8,
            question : 'When is the next Collings Universe Sets launching?',
            answer : 'We currently have 2 further NFT sets in the works. These sets will be launched in Q3 and Q4 2022'
        },
        {
            id : 9,
            question : 'How long does my Collings Universe NFT last?',
            answer : 'The Collings Universe NFT is embedded in the Ethereum blockchain and will last forever. We aim to provide value to the holders in perpetuity'
        },
        {
            id : 10,
            question : 'What do you mean by real-world values?',
            answer : "We aim to provide real world experiences using the NFT as your access pass, by holding the pass you will also get physical merchandise or you could start a physical company partnering with Collings. \n \n Yes, you will be able to mint 2 NFT each from our future NFT sets for each NFT that you hold. So if you have 3, then you will get 3 each from the next 2 NFT sets we launch. This will also increase your odds of getting whitelist spots in future launchpad projects and other benefits to come."
        },
        {
            id : 11,
            question : 'Is there a limit to how many can be minted?',
            answer : '2 NFT\'s per wallet'
        },
        {
            id : 12,
            question : 'Will there be royalties on the re-sell?',
            answer : 'Yes, 7% (5% to the creators, 2% to the Collings Foundation wallet)'
        },
        {
            id : 13,
            question : 'Will you retain any NFTs?',       
            answer : 'Yes, Collings Universe will hold 1400 NFT\'s & 100 will be given to the team'
        },
        {
            id : 14,
            question : 'Can I resell my Collings Universe NFTS?',
            answer : 'Yes, you will have the ability to re-sell your NFT via platforms such as Opensea & Looks Rare'
        },
    ]

    return ( 
        <div className="container-fluid py-4 py-md-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-auto ">
                        <p className="text-center h1 fw-bold blue mb-3 mb-md-5">FAQ</p>
                            
                        { qas.map( q => <FAQItem key={q.id} question={q.question} answer={q.answer} /> ) }

                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default FAQ;