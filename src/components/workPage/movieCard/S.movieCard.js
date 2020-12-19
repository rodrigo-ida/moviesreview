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
        width: ${props => props.isHover ? '280px' : '50px'};
        
        height: ${props => props.isHover ? '80px' : '50px'};
        margin-top: 45%; 
        transition: width 300ms ease-in-out, height 300ms ease-in-out;
        overflow: hidden

    }
    
`;


const CardText = styled.div`
    width: fit-content;
    height: fit-content;

    @media (min-width: 600px){
        display: ${props => props.isHover ? 'block' : 'none'};


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
font-size: 20px;
margin-left: auto;
padding: 10px 25px;

@media (min-width: 600px){
    padding: 10px
}


`

export {StyledMovieCardContainer,
    CardTextContainer,
    CardText,
    Title,
    Subtitle,
    ArrowContainer}