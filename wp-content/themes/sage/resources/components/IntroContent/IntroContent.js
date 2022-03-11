import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
// typical import
import gsap, {Linear} from "gsap";

const IntroContent = () => {


    const runAnimation = () => {

        var tl = gsap.timeline ({repeat:-1,yoyo:true}); /* repeat loop forever */
        tl.from('.image_75',{
            scale: 1.02,
            duration: 3,
        });
        
    }


    useEffect( () => {

        runAnimation()
    
        
    },[])

    

    return ( 
        <section className="intro__content__section">
            <img src={SAGE_DIST_PATH + `/assets/images/group_75.png`} className="image_75" />
            <div className="container py-0">
                <div className="row hero-text">
                    <div className="col-md-8 col-lg-6 text-center">
                        <p className="text-white h5 fw-bold">WELCOME TO THE</p>
                        <p className="text-white h1 fw-bold">COLLINGS UNIVERSE</p>
                        <p className="intro__content__maintext text-white">
                        An entertainment and media company focused on building exceptional Intellectual property.
                        The Collings Universe NFT is pass that will bridge real world utility with web 3, grant access to future NFT
                        sets, holders will have a right to partner with Collings, have exclusive access to both physical and
                        digital opportunities with our brand and NFT collaborators. 
                        </p>
                    </div>
                    <div className="col-md-4 col-lg-6">
            
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default IntroContent;