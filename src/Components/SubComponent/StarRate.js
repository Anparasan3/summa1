import React from 'react';
import '../Style/StarRate.css'


export default function StarRate(props) {
    return (
        <div>
            <span className={(props.starRate) >= 1 ? "fa fa-star checked" : "fa fa-star"}></span>
            <span className={(props.starRate) >= 2 ? "fa fa-star checked" : "fa fa-star"}></span>
            <span className={(props.starRate) >= 3 ? "fa fa-star checked" : "fa fa-star"}></span>
            <span className={(props.starRate) >= 4 ? "fa fa-star checked" : "fa fa-star"}></span>
            <span className={(props.starRate) >= 5 ? "fa fa-star checked" : "fa fa-star"}></span>
        </div>
    );
}