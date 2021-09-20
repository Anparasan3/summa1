import React from 'react'
import './Style/TopComponent.css'

export default function TopComponent(props) {
    const { items } = props;

    const constImage = items.slice(0,1)
    let constImg = ''
    if (constImage[0]){
        if (props.q === 'shoes') {
            constImg ='https://i.pinimg.com/originals/88/45/ec/8845ecfd5c1a77c85a4f6ac19c45a907.png';
        } else {
            constImg = constImage[0].constantImg;
        }
    }
    return (
        <div className="productConstant-container">
            <div className="productTittle">
                <h1>EXPLORE<br />THE ORIGINAL BRANDS</h1>
                <h4>SUMMER COLLECTION 2021</h4>
                <button className="discoverButton">DISCOVER</button>
            </div>
            <div className="productImageConstant">
                <img 
                    src={constImg}
                    className={props.searchProduct === 'books' ? "ProductConstantImage-books" : "ProductConstantImage"}
                    alt=" "
                    onError={(e)=>{e.target.onerror = null; e.target.src="https://2.bp.blogspot.com/-m_ZWnDKS-Nw/XOauDQpO6-I/AAAAAAAzF0E/F-OPcHmjt-o2TWAKjNUL8SNRAAfpIcEgwCLcBGAs/s1600/AW3876169_00.gif"}}
                />
            </div>
        </div>
    )
}






// {
//     items.slice(0, 1).map((res) => {
//         return (
//             <>
//                 <img src={res.constantImg} alt="" className="ConstantImage-books" />
//             </>
//         )
//     })
// }

// src={props.searchProduct === "books" ?
//     'https://www.animatedimages.org/data/media/53/animated-book-image-0032.gif' :
//     (props.searchProduct === 'shoes' ?
//         'https://i.pinimg.com/originals/88/45/ec/8845ecfd5c1a77c85a4f6ac19c45a907.png' :
//         'https://freepngimg.com/thumb/fruit/4-2-fruit-png-image.png'
//     )}