import styled from "styled-components";

const StyledMovieCardContainer = styled.div`
    background-image: url(${(props) => props.img});
    width: 100vw;
    height: 200px;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 1px 0;
    font-family: 'Crimson Text', serif;

`;

const CardTextContainer = styled.div`
    margin-top: 125px;
    background-color: #141414;
    padding: 15px;
    margin-left: auto;
    width: fit-content;
    display: flex;
`;


const CardText = styled.div`
    width: fit-content;
    height: fit-content;
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

const StyledMovieCard = (props) => {
    return (
        <StyledMovieCardContainer img={props.img}>
            <CardTextContainer>
                <CardText>
                    <Title>{props.title}</Title>
                    <Subtitle>{props.subtitle}</Subtitle>
                </CardText>
                <ArrowContainer>
                    <i class="fas fa-long-arrow-alt-right"></i>
                </ArrowContainer>
            </CardTextContainer>
        </StyledMovieCardContainer>
    );
};

export default StyledMovieCard;
