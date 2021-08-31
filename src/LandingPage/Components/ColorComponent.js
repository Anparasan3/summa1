import React from 'react';
import styled from "styled-components";

const Button = styled.button`
    background-color:  ${(props) => props.IconColor};
    transform: ${(props) => props.IconColor===props.ActiveColor ? "scale(1.35)" : "scale(1)"};
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: ${(props) => props.IconColor===props.ActiveColor ? "black solid 2px" : "black solid 1px"};
    margin-left: 15px;
    margin-right: 15px;

    @media (max-width: 500px){
        margin-left: 10px;
        margin-right: 10px;
        width: 25px;
        height: 25px;
    }
    @media (max-width: 350px){
        margin-top: 5px;
        margin-left: 10px;
        margin-right: 5px;
        width: 20px;
        height: 20px;
    }
`;

export default function ColorComponent(Props){
    return(
        <div>
            {
                Props.Product.color ?
                    <div className="LandingPageBodyColor">
                        <div className={Props.Type === "Type3" ?  "LandingPageBodyColorHeadInvisible" : "LandingPageBodyColorHead"}>Colors: </div>
                        {
                            Props.Product.color.map((colors) => {
                                return(
                                    <div key={colors.name}>
                                        <Button
                                            IconColor={colors.name}
                                            ActiveColor={Props.ColorImage==="" ? Props.Product.color[0].name : Props.ColorImage}
                                            onClick={() => Props.SetColorImage(colors.name)}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                :
                <div/>
            }
        </div>
    )
}