import React from 'react';
import { LandingPageBodyColorCenter, LandingPageBodyColor, Button } from '../Style/LandingPageStyledComponent';

export default function ColorComponent(Props){
    return(
        <LandingPageBodyColorCenter Center={Props.Center}>
            {
                Props.Product.color ?
                    <LandingPageBodyColor Type={Props.Type} View={Props.View} Align={Props.Align}>
                        <div className={Props.Type === "Type3" || Props.Align === "Vertical" ?  "LandingPageBodyColorHeadInvisible" : "LandingPageBodyColorHead"}>Colors: </div>
                         {
                             Props.Product.color.map((colors) => {
                                 return(
                                     <div key={colors.name}>
                                         <Button
                                             Align={Props.Align}
                                             IconColor={colors.name}
                                             ActiveColor={Props.ColorImage==="" ? Props.Product.color[0].name : Props.ColorImage}
                                             onClick={() => Props.SetColorImage(colors.name)}
                                         />
                                     </div>
                                 )
                             })
                         }
                    </LandingPageBodyColor>
                :
                <div/>
            }
        </LandingPageBodyColorCenter>
    )
}