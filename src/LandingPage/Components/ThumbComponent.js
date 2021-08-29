import React from 'react';

export default function ThumbComponent(Props){
    return(
        <div className={Props.Flex === "Vertical" ? "LandingPageBodyThumbVertical" : "LandingPageBodyThumbHorizontal"}>
            {console.log("Len of Thumb : ",Props.Product.productImagePath.length)}
            {
                Props.Product.productImagePath.length > 1 ?
                    Props.Product.productImagePath.map((images) => {
                        return(
                            <div className={Props.ThumbImage==="" ?  (Props.Product.productImagePath[0].name===images.name ? "LandingPageBodyThumbImagesActive" : "LandingPageBodyThumbImages") : (Props.ThumbImage===images.name ? "LandingPageBodyThumbImagesActive" : "LandingPageBodyThumbImages") } key={images.name} >
                                <img src={images.name} onClick={() => Props.ThumbNailButtonClicked(images.name)} alt="ProductThumbIcon"/>
                            </div>
                        )
                    })
                    :
                    <div/>
            }
        </div>
    )
}