import React from 'react';

export default function StarComponent(Props){
    return(
        <div>
            {
                Props.Product.starRating ?
                    <div className="LandingPageBodyRating">
                        <span className={Props.Product.starRating >= 1 ? "fa fa-star checked" : "fa fa-star unchecked"}></span>
                        <span className={Props.Product.starRating >= 2 ? "fa fa-star checked" : "fa fa-star unchecked"}></span>
                        <span className={Props.Product.starRating >= 3 ? "fa fa-star checked" : "fa fa-star unchecked"}></span>
                        <span className={Props.Product.starRating >= 4 ? "fa fa-star checked" : "fa fa-star unchecked"}></span>
                        <span className={Props.Product.starRating >= 5 ? "fa fa-star checked" : "fa fa-star unchecked"}></span>
                    </div>
                :<div/>
            }
        </div>
    )
}

// import React from 'react';

// export default function Component(){
//     return(
//         <div>
            
//         </div>
//     )
// }