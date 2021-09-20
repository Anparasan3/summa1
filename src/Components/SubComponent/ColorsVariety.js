import React, { useState } from 'react';
import styled from 'styled-components';
import '../Style/ColorsVariety.css'

const ColorButton = styled.button`
    margin-left: 8px;
    width: 30px;
    height: 30px;
    border: 1px solid black;
    border-radius: 20px;
    background-color:${(props) =>  props.ColorButtonColor};
    transform: ${(props) => props.ColorButtonColor === props.currentColor ? "scale(0.95)": "scale(0.8)"};
`;

export default function ColorsVariety(props) {

    const[currentColor, setCurrentColor] = useState("");
    const colorsFunction = (arg) => {
        setCurrentColor(arg);
    }

    return (
        <div className="Colors">
            <div className="Color-name">{props.colorsTitle}</div>
            <div className="colorButtonDiv">
                {
                    props.colorvariety.map((co) => {
                        if (currentColor === "") {
                            setCurrentColor(props.colorvariety[0].color);
                        }
                        return (
                            <ColorButton
                                ColorButtonColor={co.color}
                                currentColor={currentColor}
                                onClick={() => colorsFunction(co.color)}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}