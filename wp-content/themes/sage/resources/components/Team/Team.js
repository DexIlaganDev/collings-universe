import React from 'react';
import TeamItem from './TeamItem';

const Team = () => {

    const teamMembers = [
        {
            id : 1,
            name : 'Christian Gravias',
            desc : '& COLLINGS NFT'
        },
    ]

    return ( 
        <div className="container-fluid py-5 px-0">
            <div className="container">
                <p className="text-center h1 fw-bold blue mb-4">TEAM</p>
                    
                    <div className="row justify-content-center mb-4">
                        <div className="col-md-8">
                            <p className="text-white text-center d-none">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam rem quo molestias maxime. Eum aperiam dignissimos ratione ea, corporis optio veniam minima quia veritatis impedit voluptas, repellat sapiente omnis suscipit expedita vel maxime culpa fuga saepe est molestias assumenda asperiores beatae itaque.
                            </p>
                        </div>
                    </div>
                    

                <div className="row">
                    { teamMembers.map( person => <TeamItem key={person.id} name={person.name} desc={person.desc} />  ) }
                </div>
            </div>
        </div>
     );
}
 
export default Team;