import React from 'react';
import ReactDOM from 'react-dom';
import TimelineItem from './TimelineItem';


const timelineItems = [
    {
        id : 1,
        title : 'Major launch of NFT social media channels and community platforms (can be called Atlas NFT)',
        desc : 'We will officially launch all our social media sites and community platforms to reach more people and inform them about the Metaverse and NFTs.',
        addClasses : 'pull-right',
        timelineImage : 'Group 82.png'
    },
    {
        id : 2,
        title : 'Cryptowallet launch',
        desc : 'To guarantee safer and more secure transactions, we will launch our very own crypto wallet, Scion. Buying, selling, and storing your cryptocurrencies is made simpler and more straightforward thanks to the top quality team of developers that we have. Also, the launch of the cryptocurrency in the Atlas universe: the Atlas coin.',
        addClasses : '',
        timelineImage : 'Group 84.png'
    },
    {
        id : 3,
        title : 'Doge Galaxy collection drop + keypass launch',
        desc : 'The Doge Galaxy collection kicks off our NFT collection. With amazing artwork and added utility value, you will get more than your money’s worth when you purchase our first collection. Among the inclusions are: exclusive access to Discord and Telegram channels, two (2) free future mints on Collings sets, right to partner and use the Collings brand to launch a business, minting access to collaborators with future drops, monthly Zoom chats, Collings NFT consultation for those who want to launch their own NFT collections, buy land on Decentraland or Sandbox, create a DAO (decentralized autonomous organization), and join monthly competitions. The Atlas Keypass will give you the chance to have an exclusive first-look and instant access to all our future content before everyone else.',
        addClasses : 'pull-right',
        timelineImage : 'Group 100.png'
    },
    {
        id : 4,
        title : 'Collings Media channel launch',
        desc : 'Access all our content across brands in just one place as we launch the Collings Media Channel. From our real estate guides to our animated shorts; from our candid team videos to our informative infographics, and many more!',
        addClasses : '',
        timelineImage : 'Group 88.png'
    },
    {
        id : 5,
        title : 'Zest: First Meet-Up',
        desc : 'This first meet-up, we will have discussions with artists that we partnered with. We will also update you of the next steps we plan to take and content we would release, and some live performances from friends we’ve met along the way in this digital journey. Of course, what meet-up wouldn’t be complete without prizes and giveaways, right? See you there!',
        addClasses : 'pull-right',
        timelineImage : 'Group 90.png'
    },
    {
        id : 6,
        title : 'Content podcast launch',
        desc : 'Our aim is to make sure that we can provide you with relevant content on all kinds of different platforms. Adding a podcast into the mix is another way to connect with our audience and our friends in the Metaverse. With different topics to discuss suggested on our community channels, we will make sure to answer all your questions and talk about topics that you want to share.',
        addClasses : '',
        timelineImage : 'Group 94.png'
    },
    {
        id : 7,
        title : '3D/Styled by Collings/Collings Real Estate/Gravias Development enter the Metaverse',
        desc : 'Our property brands now have their address on the Metaverse. Check out the properties we have available for sale and lease; our interior design products and services; and our future development projects in Melbourne and other parts of Australia.',
        addClasses : 'pull-right',
        timelineImage : 'Group 96.png'
    },
    {
        id : 8,
        title : 'Doge game',
        desc : 'Our first game launches in the Metaverse! As we continue our journey to explore more aspects of the Metaverse, we release our first game: the Doge Bonbon. Help Astro the Doge navigate the Metaverse by dodging meteors and asteroids while accomplishing tasks as he visits different planets in the Doge Galaxy.',
        addClasses : '',
        timelineImage : 'Group 99.png'
    },
    {
        id : 9,
        title : 'Zodiac celestials collection drop',
        desc : 'The Celestial Zodiac collection is our second NFT drop. Highlighting the magic of the stars and the cosmos, the Celestial Zodiac collection will feature twelve (12) different designs and a story that everyone will definitely enjoy being a part of.',
        addClasses : 'pull-right',
        timelineImage : 'Group 92.png'
    },
    {
        id :10,
        title : 'Zeal: Second Meet-Up',
        desc : 'The second meet-up will be focused on you, our denizens! We want to get to know you more. We will be having small-group activities that you can join facilitated by our teammates from the Collings family. We want to find out what kind of content you are excited to consume, and what projects you think we should all venture into. We want to create with you!',
        addClasses : '',
        timelineImage : 'Group 105.png'
    },
    {
        id :11,
        title : 'Collings Academy',
        desc : 'Do you want to know more about the Metaverse and the Digital Age? Collings Academy offers classes and tutorials that can help you build your own collection, find careers in the emerging digital transformation era, and navigate the Metaverse. Below are examples of things that you can learn from us: - graphic design - data science and artificial intelligence - metaverse masterclass - data annotation - technical copywriting - digital marketing - and more!',
        addClasses : 'pull-right',
        timelineImage : 'Group 109.png'
    },
    {
        id :12,
        title : 'Music platform',
        desc : 'We present the newest music platform in the Metaverse! As we collaborate with more artists and performers in creating their NFT collections and providing more utility value for their fans and supporters, we offer a new avenue for them to showcase their talent.',
        addClasses : '',
        timelineImage : 'Group 217.png'
    },
    {
        id :13,
        title : 'Collings Adventures launch',
        desc : 'We introduce Lucas, Isla, Ned, and Mia, the Collings siblings who will be with you as you navigate the Collings (Atlas) universe. Visit different realms, experience new adventures, and explore our corner of the Metaverse in this series of animated shows that feature our beloved characters.',
        addClasses : 'pull-right',
        timelineImage : 'Group 113.png'
    },
    {
        id :14,
        title : 'Edge: Third Meet-Up',
        desc : 'This third meet-up is all about Atlas! We will show you how far we’ve come in the last several months since we had our very first milestone and will give you sneak peeks on the upcoming adventures leading toward the grand launch of the Collings Universe (Atlas). Get to know the team members behind your favorite shows and art. Meet the Collings family in the flesh!',
        addClasses : '',
        timelineImage : 'Group 115.png'
    },
    {
        id :15,
        title : 'Collings Agents show launch',
        desc : 'One of the best parts about real estate is that you get to help fulfill your client’s dream home. Go through the journey of selling each property in Behind the Sale; answer your investment questions and other topics about the future by joining our founder Christian in Car Pool; or get a glimpse of the Collings culture and see for yourself how we try our hardest to maintain a healthy balance of work and play.',
        addClasses : 'pull-right',
        timelineImage : 'Group 119.png'
    },
    {
        id :16,
        title : 'Creators Hub',
        desc : 'We believe in the power of collaboration so we will launch the Collings Creators Hub; a platform where budding artists and those who want to launch their own NFT collections can seek mentorship from experts and a wide variety of options for funding via our investment group. In the future, we will also open our doors to other business projects that need help in funding or any form of support. Let us build a community of industry starters.',
        addClasses : '',
        timelineImage : 'Group 117.png'
    },
    {
        id :17,
        title : 'Collings Foundation',
        desc : 'Of course, not only do we want to make a difference and leave a mark in the Metaverse; we also want to do what we can in the real world. Collings Foundation will be built alongside every NFT collection we drop from our brands and our clients. A percentage of the earnings for each collection will be set aside to establish projects for select charity organizations.',
        addClasses : 'pull-right',
        timelineImage : 'Group 121.png'
    },
    {
        id :18,
        title : 'Collings (Atlas) Universe AVP',
        desc : 'This is it! The Collings Universe AVP will document all the steps we’ve taken in creating the universe. From the brainstorming days to the conceptualization of our first collection; from the art to the storyline; from the community that we’ve built with you to the actual development of the universe itself; journey with us as we take the final steps to the grand launch of the Collings Universe.',
        addClasses : '',
        timelineImage : 'Group 218.png'
    },
    {
        id :19,
        title : 'Collings Rewards Club',
        desc : 'The Collings Rewards Club gives exclusive loyalty points for members who consistently make themselves a part of the Collings Universe by purchasing NFTs, joining community discussions, and attending meet-ups. Divided into several different tiers, each level comes with a specific set of perks. The higher the tier, the more prizes and privileges you can enjoy.',
        addClasses : 'pull-right',
        timelineImage : 'Group 125.png'
    },
    {
        id :20,
        title : 'Collings NFT Marketplace launch',
        desc : 'We will never run out of creative artists and there will always be a new collection to look forward to so we will launch the Collings NFT Marketplace; an online portal for NFT collections where you can buy, sell, and mint.',
        addClasses : '',
        timelineImage : 'Group 127.png'
    },
    {
        id :21,
        title : 'Collings Universe grand launch',
        desc : 'Finally! All the excitement leads to here! Welcome to the Collings Universe!',
        addClasses : 'pull-right',
        timelineImage : 'Group 215.png'
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