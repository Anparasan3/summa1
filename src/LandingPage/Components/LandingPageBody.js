import React, { useState, useEffect } from 'react';
import '../Style/LandingPage.css';
import StarComponent from './StarComponent';
import SizeComponent from './SizeCompoent';
import ColorComponent from './ColorComponent';
import ThumbComponent from './ThumbComponent';
import TagComponent from './TagComponent';
import axios from "axios";

const baseURL = "https://json.extendsclass.com/bin/395db4eba7ff"; //Shoes
//const baseURL = "https://json.extendsclass.com/bin/fb25314d339a"; //Books
const Type = "Type3"

export default function LandingPageBody(){

    const [BigImage, SetBigImage] = useState("");
    const [ThumbImage, SetThumbImage] = useState("");
    const [ColorImage, SetColorImage] = useState("");
    const [SizeImage, SetSizeImage] = useState("");
    const [ProductJson, SetProductJson] = useState({});

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            SetProductJson(response.data);
        });
    },[]);
    

    function ThumbNailButtonClicked(data){
        SetBigImage(data);
        SetThumbImage(data);
    }
    
    if(ProductJson.responseCode === 0){
        return(
            <div className="LandingPageBody" key={ProductJson.responseData.productId}>
                <div className="LandingPageBodyLeft">
                    { Type === "Type3" ? <ThumbComponent Product={ProductJson.responseData} ThumbImage={ThumbImage} ThumbNailButtonClicked={ThumbNailButtonClicked} Flex="Vertical"/> : <div/> }
                    <div className="LandingPageBodyImageAndColor">
                        <div className="LandingPageBodyImage">
                            <img src={BigImage==="" ? ProductJson.responseData.productImagePath[0].name : BigImage} className="LandingPageBodyIcon" alt="ProductBigImage"/>
                        </div>
                        { Type === "Type3" ?
                            <ColorComponent Product={ProductJson.responseData} ColorImage={ColorImage} SetColorImage={SetColorImage} Type={Type}/>
                            : 
                            Type === "Type2" ?
                                <div className="Flex">
                                    <ThumbComponent Product={ProductJson.responseData} ThumbImage={ThumbImage} ThumbNailButtonClicked={ThumbNailButtonClicked} Flex="Horizontal"/>
                                    <StarComponent Product={ProductJson.responseData}/>
                                </div>
                                :
                                Type === "Type1" ?
                                    <div>
                                        <div className="Flex">
                                            <TagComponent Product={ProductJson.responseData} />
                                            <StarComponent Product={ProductJson.responseData}/>
                                        </div>
                                        <ColorComponent Product={ProductJson.responseData} ColorImage={ColorImage} SetColorImage={SetColorImage} Type={Type}/>
                                    </div>
                                :
                                <div/>
                        }
                    </div>
                </div>
                <div className="LandingPageBodyRight">
                    <div className="LandingPageBodyRightHead">
                        <div>
                            <div className="LandingPageBodyName">{ProductJson.responseData.productName.toUpperCase()}</div>
                            <div className="LandingPageBodyType">{ProductJson.responseData.type}</div>
                        </div>
                        <div className="LandingPageBodyPrize">USD {ProductJson.responseData.onlineSellingPrice}$</div>
                    </div>
                    { Type === "Type3" ? <StarComponent Product={ProductJson.responseData}/> : <div/> }
                    <div className="LandingPageBodyDiscription">{ProductJson.responseData.productLongDescription}</div>
                    { ProductJson.responseData.author ? <p className="LandingPageBodyGeneralQuestion"><span>Author Name : </span>{ProductJson.responseData.author}</p> : <div/>}
                    { ProductJson.responseData.Publisher ? <div className="LandingPageBodyGeneralQuestion"><span>Publisher : </span>{ProductJson.responseData.Publisher}</div> : <div/>}
                    { ProductJson.responseData.Language ? <div className="LandingPageBodyGeneralQuestion"><span>Language : </span>{ProductJson.responseData.Language}</div> : <div/>}
                    { ProductJson.responseData.Paperback ? <div className="LandingPageBodyGeneralQuestion"><span>Paperback : </span>{ProductJson.responseData.Paperback}</div> : <div/>}
                    { Type === "Type2" || Type === "Type3" ? <TagComponent Product={ProductJson.responseData} /> : <div/> }
                    { Type === "Type1" || Type === "Type3" ? <SizeComponent Product={ProductJson.responseData} SizeImage={SizeImage} SetSizeImage={SetSizeImage} Type="UnderScore"/> : <SizeComponent Product={ProductJson.responseData} SizeImage={SizeImage} SetSizeImage={SetSizeImage} Type="DropDown"/> }
                    { Type === "Type2" ? <ColorComponent Product={ProductJson.responseData} ColorImage={ColorImage} SetColorImage={SetColorImage} Type={Type}/> : <div/> }
                    <div className="AddToCardAndVisitWebsite">
                        <div className="AddToCardAndVisitWebsiteInnerDiv"><button className="LandingPageBodyAddToCard" onClick={() => alert("Item Added to your card successfully !!!")}>ADD TO CARD</button></div>
                        <div className="AddToCardAndVisitWebsiteInnerDiv"><button className="LandingPageBodyVisitWebsite" onClick={event =>  window.location.href="https://www.openturf.in/"}>VISIT WEBSITE</button></div>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div>404 Not found</div>
        )
    }

}