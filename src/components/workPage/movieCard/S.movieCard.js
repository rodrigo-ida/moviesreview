import styled from 'styled-components'


const StyledMovieCardContainer = styled.div`
    background-image: url(${(props) => props.img});
    width: 100%;
    height: 200px;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 1px 0;
    font-family: 'Crimson Text', serif;
    
    @media (min-width: 600px){
        height: 400px;

    }

`;

const CardTextContainer = styled.div`
    background-color: #141414;
    padding: 15px;
    margin-top: 125px;
    margin-left: auto;
    width: fit-content;
    display: flex;

    @media (min-width: 600px){
        width: 50px;
        height: 50px;
        margin-top: 45%;
        /* margin-right: 5  px; */

    }
    
`;


const CardText = styled.div`
    width: fit-content;
    height: fit-content;

    @media (min-width: 600px){
        display: none

    }
`;

const Title = styled.h1`
    color: whitesmoke;
    font-size: 18px;
    font-weight: 100;
    letter-spacing: 3px;
    padding-bottom: 5px;
`;

const Subtitle = styled.p`
    color: gray;
    font-size: 12px;
`;

const ArrowContainer= styled.div`
width: 20px;
color: goldenrod;
display: flex;
justify-content: center;
align-items: center;
padding: 0 0 0 30px;
font-size: 20px;
`

export {StyledMovieCardContainer,
    CardTextContainer,
    CardText,
    Title,
    Subtitle,
    ArrowContainer}