import React from 'react';
import ReactDOM from 'react-dom';
import TimelineItem from './TimelineItem';


const timelineItems = [
    {
        id : 1,
        title : 'Right to Partner',
        desc : 'Use the Collings brand to launch a business',
        addClasses : 'pull-right',
        timelineImage : 'Group 117.png'
    },
    {
        id : 2,
        title : 'Collings Foundation',
        desc : 'Donate funds made to a charity etc (2% of royalties will go to a charity)',
        addClasses : '',
        timelineImage : 'Group 121.png'
    },
    {
        id : 3,
        title : 'Launchpad Partnership perks access',
        desc : 'Minting access to collaborators with future drops (Collings NFT partners)',
        addClasses : 'pull-right',
        timelineImage : 'Group 127.png'
    },
    {
        id : 4,
        title : 'Direct Access to Christian Gravias & team Collings NFT consultation for members who want to launch an NFT set',
        desc : '',
        addClasses : '',
        timelineImage : 'Group 88.png'
    },
    {
        id : 5,
        title : 'Monthly giveaways exclusively to holders',
        desc : '',
        addClasses : 'pull-right',
        timelineImage : 'Group 90.png'
    },
    {
        id : 6,
        title : 'Physical & Virtual merch',
        desc : '',
        addClasses : '',
        timelineImage : 'Group 218.png'
    },
    {
        id : 7,
        title : 'Private community chat (Discord, Telegram)',
        desc : '',
        addClasses : 'pull-right',
        timelineImage : 'Group 115.png'
    },
    {
        id : 8,
        title : 'Build a Clubhouse in the Metaverse',
        desc : '',
        addClasses : '',
        timelineImage : 'Group 96.png'
    },
    {
        id : 9,
        title : 'Special guest speaking events',
        desc : '',
        addClasses : 'pull-right',
        timelineImage : 'Group 119.png'
    },
    
]


const Timeline = () => {
    return ( 
        <section className="timeline__content__section">
            <div className="container-fluid">
                <div className="container">
                    <div className="timeline">

                        {timelineItems.map( tl => (
                            <TimelineItem key={tl.id} addClasses={tl.addClasses} timelineImage={tl.timelineImage} title={tl.title} desc={tl.desc} />
                        ))}
                        

                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Timeline;