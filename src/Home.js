import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Style/Home.css';

export default function Home(props) {
    let history = useHistory();
    function IndexShoes() {
        history.push("/plugin-content/search?q=shoes")
    }
    function IndexBooks() {
        history.push("/plugin-content/search?q=books")
    }
    function IndexFruits() {
        history.push("/plugin-content/search?q=fruits")
    }
    
    return (
        <div className="Home-Container">
            <h1>Hello!!! world.</h1>
            <p>This is sample home page.</p>
            <div className="Home-Product">
                <div className="products-link" onClick={() => IndexShoes()}>
                    <div className="Home-Shoes" >
                        <span className="Home-Shoes" >shoes</span>
                    </div>
                </div>
                <div className="products-link" onClick={() => IndexBooks()}>
                    <div className="Home-Shoes" >
                        <span className="Home-Shoes" >books</span>
                    </div>
                </div>
                <div className="products-link" onClick={() => IndexFruits()}>
                    <div className="Home-Shoes" >
                        <span className="Home-Shoes" >fruits</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
