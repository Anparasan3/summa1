import React from 'react';

export default function TagComponent(Props){
    return(
        <div>
            {
                Props.Product.tag ?
                    <div className="LandingPageBodyTagInsibleInMobileView">
                        <div className="LandingPageBodyTag">
                            {
                                Props.Product.tag.map((tags) => {
                                    return(
                                        <div className="LandingPageBodyTagMap" key={tags.name}>{tags.name}</div>
                                    )
                                })
                            }
                        </div>
                    </div>
                :<div/>
            }
        </div>
    )
}