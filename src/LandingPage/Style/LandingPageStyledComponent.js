import styled from "styled-components";

export const Button = styled.button`
    background-color:  ${(props) => props.IconColor};
    transform: ${(props) => props.IconColor===props.ActiveColor ? "scale(1.35)" : "scale(1)"};
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: ${(props) => props.IconColor===props.ActiveColor ? "black solid 2px" : "black solid 1px"};
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: ${(props) => props.Align==="Vertical" ? "20px" : "auto"};

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

export const LandingPageBodyColor = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: ${(props) => props.Align==="Vertical" ? "column" : "row"};
    align-items: center;
    @media (max-width: 500px){
        display: ${(props) => props.View==="Web" ? "none" : ""};
    }
    @media (min-width: 500px){
        display: ${(props) => props.View==="Mobile" ? "none" : ""};
    }
`;

export const LandingPageBodyColorCenter = styled.div`
    display: flex;
    justify-content: ${(props) => props.Center==="Center" ? "space-around" : ""};
    align-items: ${(props) => props.Center==="Center" ? "center" : ""};
`;